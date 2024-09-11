// Images
import Img01 from "../../../../../../public/images/Partnars_Logos/32-ebn-masr.png";
import Img02 from "../../../../../../public/images/Partnars_Logos/01-saltaoon.png";
import Img03 from "../../../../../../public/images/Partnars_Logos/03-baheya.png";
import Img04 from "../../../../../../public/images/Partnars_Logos/02-nos-dasta.png";
import Img05 from "../../../../../../public/images/Partnars_Logos/07-elnegma-elnabolsya.png";



// import Img06 from "../../../../../public/images/Partnars_Logos/09-mshakeek.png";

// import Img07 from "../../../../../public/images/Partnars_Logos/26-shawerma-halb.png";
// import Img08 from "../../../../../public/images/Partnars_Logos/06-bonoh.png";

// import Img04 from "../../../../../public/images/Partnars_Logos/04-dokan-fteer.png";
// import Img05 from "../../../../../public/images/Partnars_Logos/05-kbsha.png";
// import Img06 from "../../../../../public/images/Partnars_Logos/06-bonoh.png";
// import Img10 from "../../../../../public/images/Partnars_Logos/10-basha.png";
// import Img11 from "../../../../../public/images/Partnars_Logos/11-chicken-planet.png";
// import Img12 from "../../../../../public/images/Partnars_Logos/12-chicken-fila.png";




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

const PartnersOneData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    heading: t("one.heading"),
    heading2: t("one.heading2"),
    imgSrc: Img01,
    content: [
      {
        title: t("one.Q1"),
        description: t("one.A1"),
      },
      {
        title: t("one.Q2"),
        description: t("one.A2"),
      },
      {
        title: t("one.Q3"),
        description: t("one.A3"),
      },
      {
        title: t("one.Q4"),
        description: t("one.A4"),
      },
      
    ],
  },
  {
    id: 2,
    heading: t("two.heading"),
    heading2: t("two.heading2"),
    imgSrc: Img02,
    content: [
      {
        title: t("two.Q1"),
        description: t("two.A1"),
      },
      {
        title: t("two.Q2"),
        description: t("two.A2"),
      },
      {
        title: t("two.Q3"),
        description: t("two.A3"),
      },
      {
        title: t("two.Q4"),
        description: t("two.A4"),
      },
    ],
  },
  {
    id: 3,
    heading: t("three.heading"),
    heading2: t("three.heading2"),
    imgSrc: Img03,
    content: [
      {
        title: t("three.Q1"),
        description: t("three.A1"),
      },
      {
        title: t("three.Q2"),
        description: t("three.A2"),
      },
      {
        title: t("three.Q3"),
        description: t("three.A3"),
      },
      {
        title: t("three.Q4"),
        description: t("three.A4"),
      },
    ],
  },

  {
    id: 4,
    heading: t("four.heading"),
    heading2: t("four.heading2"),
    imgSrc: Img04,
    content: [
      {
        title: t("four.Q1"),
        description: t("four.A1"),
      },
      {
        title: t("four.Q2"),
        description: t("four.A2"),
      },
      {
        title: t("four.Q3"),
        description: t("four.A3"),
      },
      {
        title: t("four.Q4"),
        description: t("four.A4"),
      },
    ],
  },

  {
    id: 5,
    heading: t("five.heading"),
    heading2: t("five.heading2"),
    imgSrc: Img05,
    content: [
      {
        title: t("five.Q1"),
        description: t("five.A1"),
      },
      {
        title: t("five.Q2"),
        description: t("five.A2"),
      },
      {
        title: t("five.Q3"),
        description: t("five.A3"),
      },
      {
        title: t("five.Q4"),
        description: t("five.A4"),
      },
    ],
  },



  
  // Add more items similarly...
];

export default PartnersOneData;
