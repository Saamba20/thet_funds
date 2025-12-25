export type NewsItem = {
  id: string
  title: string
  description: string
  date: string
  category: string
  featured: boolean
  image?: string
  content?: string
}

export const newsItems: NewsItem[] = [
  {
    id: "youth-fund-call",
    title: "Call for Proposals: Youth Employability Fund",
    description:
      "Applications are now open for the Youth Employability & Entrepreneurship Fund. Accredited institutions, youth-focused organizations, and private sector partners are invited to submit proposals to support youth skills development and employment.",
    date: "Coming Soon",
    category: "Announcement",
    featured: true,
    image: "/14.jpeg",
    content: "fhhdjd State House, Banjul, 1st December 2025: President Barrow Calls For Honest Teaching of African Warriors’ History in Colonial Wars At the solemn commemoration of the 81st anniversary of the ‘Thiaroye Massacre’ of World War II veterans in Senegal, His Excellency President Adama Barrow, commended his Senegalese counterpart President Bassirou Diomaye Faye and the Government of Senegal for their steadfast commitment to the establishment of truth on this “dark chapter of our shared history.” The international committee of independent researchers on Thiaroye represents a crucial step towards historical justice fhhfhfhfhf fjjfj",
  },
  {
    id: "board-inauguration",
    title: "Inauguration of the THET Fund Board of Trustees",
    description:
      "The THET Fund officially inaugurated its Board of Trustees in a ceremony attended by government officials, development partners, and education stakeholders. The Board will provide strategic oversight and ensure accountability in fund management.",
    date: "December 2024",
    category: "Press Release",
    featured: true,
    image: "/15.jpeg",
    content: "fhhdjd State House, Banjul, 1st December 2025: President Barrow Calls For Honest Teaching of African Warriors’ History in Colonial Wars At the solemn commemoration of the 81st anniversary of the ‘Thiaroye Massacre’ of World War II veterans in Senegal, His Excellency President Adama Barrow, commended his Senegalese counterpart President Bassirou Diomaye Faye and the Government of Senegal for their steadfast commitment to the establishment of truth on this “dark chapter of our shared history.” The international committee of independent researchers on Thiaroye represents a crucial step towards historical justice fhhfhfhfhf fjjfj",
  },
  {
    id: "stakeholders-forum",
    title: "National TVET & Higher Education Stakeholders Forum",
    description:
      "Join us for a national forum bringing together stakeholders from government, institutions, private sector, and development partners to discuss the future of TVET and higher education in The Gambia.",
    date: "Upcoming",
    category: "Event",
    featured: false,
    image: "/16.jpeg",
    content: "fhhdjd State House, Banjul, 1st December 2025: President Barrow Calls For Honest Teaching of African Warriors’ History in Colonial Wars At the solemn commemoration of the 81st anniversary of the ‘Thiaroye Massacre’ of World War II veterans in Senegal, His Excellency President Adama Barrow, commended his Senegalese counterpart President Bassirou Diomaye Faye and the Government of Senegal for their steadfast commitment to the establishment of truth on this “dark chapter of our shared history.” The international committee of independent researchers on Thiaroye represents a crucial step towards historical justice fhhfhfhfhf fjjfj",
  },
  {
    id: "vacancies",
    title: "We are Actively Recruiting - Vacancies Available",
    description:
      "The THET Fund Secretariat is expanding its team. We are looking for qualified professionals to join us in transforming higher education and TVET in The Gambia. Multiple positions available.",
    date: "Open",
    category: "Notice",
    featured: true,
    image: "/17.jpeg",
    content: "fhhdjd State House, Banjul, 1st December 2025: President Barrow Calls For Honest Teaching of African Warriors’ History in Colonial Wars At the solemn commemoration of the 81st anniversary of the ‘Thiaroye Massacre’ of World War II veterans in Senegal, His Excellency President Adama Barrow, commended his Senegalese counterpart President Bassirou Diomaye Faye and the Government of Senegal for their steadfast commitment to the establishment of truth on this “dark chapter of our shared history.” The international committee of independent researchers on Thiaroye represents a crucial step towards historical justice fhhfhfhfhf fjjfj",
  },
  {
    id: "partnership-announcement",
    title: "New Partnership with Development Partners",
    description:
      "The THET Fund announces strategic partnerships with international development organizations to expand funding opportunities and technical support for tertiary education institutions.",
    date: "November 2024",
    category: "Press Release",
    featured: false,
    image: "/18.jpeg",
    content: "fhhdjd State House, Banjul, 1st December 2025: President Barrow Calls For Honest Teaching of African Warriors’ History in Colonial Wars At the solemn commemoration of the 81st anniversary of the ‘Thiaroye Massacre’ of World War II veterans in Senegal, His Excellency President Adama Barrow, commended his Senegalese counterpart President Bassirou Diomaye Faye and the Government of Senegal for their steadfast commitment to the establishment of truth on this “dark chapter of our shared history.” The international committee of independent researchers on Thiaroye represents a crucial step towards historical justice fhhfhfhfhf fjjfj",
  },
]

export function getAllNews() {
  return newsItems
}

export function getNewsById(id: string) {
  return newsItems.find((n) => n.id === id) || null
}
