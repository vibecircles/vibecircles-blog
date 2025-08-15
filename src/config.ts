import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Inspiration & Mindset",
    tag: "inspiration-mindset",
    description: "Motivational stories, productivity tips, and creative mindset practices.",
  },
  {
    label: "Creative Tutorials",
    tag: "creative-tutorials",
    description: "How-to guides for art, design, video, photography, and creative tools.",
  },
  {
    label: "Events & Experiences",
    tag: "events-experiences",
    description: "Recaps and announcements of festivals, meetups, exhibitions, and workshops.",
  },
  {
    label: "Community Stories",
    tag: "community-stories",
    description: "Spotlights on VibeCircles members, collaborations, and success stories.",
  },
  {
    label: "Lifestyle & Culture",
    tag: "lifestyle-culture",
    description: "Stories exploring modern lifestyle, creativity, and cultural movements.",
  },
    {
    label: "Art & Design",
    tag: "art-design",
    description: "Creative techniques, inspiration, and stories from visual artists and designers.",
  },
    {
    label: "NFT & Web3",
    tag: "nft-web3",
    description: "Guides, trends, and news from the blockchain and digital art world.",
  },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Example Org",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Launched",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Let's build something amazing!",
  categories,
};
