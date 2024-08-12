// Images
import Img01 from "../../../../../public/images/Partnars_Logos/01-saltaoon.png";
import Img02 from "../../../../../public/images/Partnars_Logos/02-nos-dasta.png";
import Img03 from "../../../../../public/images/Partnars_Logos/03-baheya.png";
import Img04 from "../../../../../public/images/Partnars_Logos/04-dokan-fteer.png";
import Img05 from "../../../../../public/images/Partnars_Logos/05-kbsha.png";
import Img06 from "../../../../../public/images/Partnars_Logos/06-bonoh.png";
import Img08 from "../../../../../public/images/Partnars_Logos/07-elnegma-elnabolsya.png";

interface ContentItem {
  title: string;
  description: string;
}

// CAROUSEL DATA

interface DataType {
  id?: number;
  heading?: string;
  heading2?: string;
  imgSrc?: any;
  name?: string;
  content?: ContentItem[]; // Add this property
}

const PartnersData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    heading: "Full stack modern",
    heading2: "javascript",
    name: "Colt Stelle",
    imgSrc: Img01,
    content: [
      {
        title: "Introduction",
        description: "Learn the basics of modern full-stack JavaScript.",
      },
      {
        title: "Backend",
        description: "Explore Node.js and Express for backend development.",
      },
      {
        title: "Frontend",
        description: "Dive into React and Next.js for frontend development.",
      },
      {
        title: "Database",
        description: "Understand database integration with MongoDB.",
      },
      {
        title: "Deployment",
        description: "Learn how to deploy your applications.",
      },
    ],
  },
  {
    id: 2,
    heading: "Design system",
    heading2: "with React programme",
    name: "Colt Stelle",
    imgSrc: Img02,
    content: [
      {
        title: "What is a Design System?",
        description: "Introduction to design systems and their importance.",
      },
      {
        title: "Atomic Design",
        description: "Learn about the principles of atomic design.",
      },
      {
        title: "Component Library",
        description: "Building a component library with React.",
      },
      { title: "Theming", description: "Creating themes and managing styles." },
      {
        title: "Best Practices",
        description: "Follow best practices for maintaining a design system.",
      },
    ],
  },
  {
    id: 3,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img03,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },

  {
    id: 4,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img04,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },

  {
    id: 5,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img05,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },

  {
    id: 6,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img06,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },

  {
    id: 7,
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt Stelle",
    imgSrc: Img08,
    content: [
      {
        title: "Introduction to Figma",
        description: "Getting started with Figma for banner design.",
      },
      {
        title: "Creating Layouts",
        description: "Learn how to create effective layouts.",
      },
      {
        title: "Typography",
        description: "Understanding typography in banner design.",
      },
      {
        title: "Colors and Imagery",
        description: "Using colors and images effectively.",
      },
      {
        title: "Exporting Banners",
        description: "How to export and use your banners.",
      },
    ],
  },
  // Add more items similarly...
];

export default PartnersData;
