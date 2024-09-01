import img01 from "../../../../public/images/news/01.png";
import img02 from "../../../../public/images/news/02.png";
import img03 from "../../../../public/images/news/03.png";
import img04 from "../../../../public/images/news/04.png";
import img05 from "../../../../public/images/news/05.png";
import img06 from "../../../../public/images/news/06.png";
import img07 from "../../../../public/images/news/07.png";
import img08 from "../../../../public/images/news/08.png";
import img09 from "../../../../public/images/news/09.png";
import img10 from "../../../../public/images/news/10.png";
import img11 from "../../../../public/images/news/11.png";
import img12 from "../../../../public/images/news/12.png";
import img13 from "../../../../public/images/news/13.png";

interface DataType {
  id?: number;
  title?: string;
  subtitle?: string;
  imgSrc?: any;
  videoId?: any;
  category?: string;
}
const NewsData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    title: "Marketing",
    subtitle: "Most important tips in marketing",
    videoId: "hjnQfaml14s",
    imgSrc: img01,
    category: "Marketing",
  },

  {
    id: 2,
    title: "Where should I post?",
    subtitle: "Most important tips in marketing",
    videoId: "VHPga8J-dUY",
    imgSrc: img02,
    category: "Marketing",
  },

  {
    id: 3,
    title: "Is marketing useful for your brand?",
    subtitle: "Where should I post?",
    videoId: "KeMGSW0dUW8",
    imgSrc: img03,
    category: "Marketing",
  },
  {
    id: 4,
    title: "What to do if your product isn’t selling?",
    subtitle: "Where should I post?",
    videoId: "5IV-hEPBjUA",
    imgSrc: img04,
    category: "Marketing",
  },
  {
    id: 5,
    title: "10 Best free online marketing",
    subtitle: "Where should I post?",
    videoId: "LTNxHkYOMVQ",
    imgSrc: img05,
    category: "Marketing",
  },
  {
    id: 6,
    title: "Level up your follower number now for free",
    subtitle: "Where should I post?",
    videoId: "qA5DR-As4mk",
    imgSrc: img06,
    category: "Learning",
  },
  {
    id: 7,
    title: "Top 10 reasons why your ad is not working",
    subtitle: "Where should I post?",
    videoId: "pyDQ-sgdP8k",
    imgSrc: img07,
    category: "Learning",
  },
  {
    id: 8,
    title: "What is the best method of marketing?",
    subtitle: "Where should I post?",
    videoId: "QQLJtC35U1c",
    imgSrc: img08,
    category: "Learning",
  },
  {
    id: 9,
    title: "The best marketing tool in 2024",
    subtitle: "Where should I post?",
    videoId: "8nDqLAMR9kY",
    imgSrc: img09,
    category: "Learning",
  },
  {
    id: 10,
    title: "The best sales funnel ever",
    subtitle: "Where should I post?",
    videoId: "PgooaHEExZg",
    imgSrc: img10,
    category: "Sales",
  },
  {
    id: 11,
    title: "Marketing vs sales",
    subtitle: "Where should I post?",
    videoId: "J7Hz2WpsPFI",
    imgSrc: img11,
    category: "Sales",
  },
  {
    id: 12,
    title: "Is influencers marketing important?",
    subtitle: "Where should I post?",
    videoId: "fCAX4gCfiLA",
    imgSrc: img12,
    category: "Sales",
  },
  {
    id: 13,
    title: "A secret they won’t tell you for your ad",
    subtitle: "Where should I post?",
    videoId: "La6XCk6Dbhw",
    imgSrc: img13,
    category: "Sales",
  },
];

export default NewsData;
