"use client"

import { useState, useEffect } from "react"
import { Share2, Link2, Mail, Twitter, Linkedin, Facebook, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

interface ShareButtonProps {
  title: string
  description?: string
  id: string // Used to construct the URL
}

export function ShareButton({ title, description, id }: ShareButtonProps) {
  const [url, setUrl] = useState("")

  useEffect(() => {
    // Check if window is defined to avoid SSR issues
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/news/${id}`)
    }
  }, [id])

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
        toast.success("Shared successfully!")
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Error sharing:", error)
          // Fallback to menu if share fails (but not if cancelled)
        }
      }
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      toast.success("Link copied to clipboard")
    } catch (err) {
      console.error("Failed to copy:", err)
      toast.error("Failed to copy link")
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `Check out this article: ${title}\n\n${description || ""}\n\nRead more here: ${url}`
    )}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
      `Check out this article: ${title}\n\n${description || ""}\n\nRead more here: ${url}`
    )}`,
  }

  const openShareLink = (link: string) => {
    window.open(link, "_blank", "width=600,height=400")
  }

  // If native share is available, use it directly (optional: or combine with dropdown)
  // For better UX on desktop, we'll use the dropdown as primary, but on mobile native might be better.
  // Here we'll implement a hybrid: The button trigger shows the menu on desktop, 
  // but we can add a "Native Share" option in the menu or just use the menu for all.
  // Given the design, a consistent dropdown menu is robust.

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0">
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share article</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Share this article</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={copyToClipboard} className="cursor-pointer gap-2">
          <Link2 className="h-4 w-4" />
          Copy Link
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => openShareLink(shareLinks.twitter)} className="cursor-pointer gap-2">
          <Twitter className="h-4 w-4" />
          Twitter / X
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => openShareLink(shareLinks.linkedin)} className="cursor-pointer gap-2">
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => openShareLink(shareLinks.facebook)} className="cursor-pointer gap-2">
          <Facebook className="h-4 w-4" />
          Facebook
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => openShareLink(shareLinks.whatsapp)} className="cursor-pointer gap-2">
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => openShareLink(shareLinks.email)} className="cursor-pointer gap-2">
          <Mail className="h-4 w-4" />
          Email
        </DropdownMenuItem>

        {/* Optional: Show native share if available as an extra option */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
