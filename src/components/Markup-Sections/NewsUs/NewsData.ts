import videoImg from "../../../../public/images/news/Marketing.png";

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
    imgSrc: videoImg,
    category: "Marketing",
  },

  {
    id: 2,
    title: "Where should I post?",
    subtitle: "Most important tips in marketing",
    videoId: "VHPga8J-dUY",
    imgSrc: videoImg,
    category: "Marketing",
  },

  {
    id: 3,
    title: "Is marketing useful for your brand?",
    subtitle: "Where should I post?",
    videoId: "KeMGSW0dUW8",
    imgSrc: videoImg,
    category: "Marketing",
  },
  {
    id: 4,
    title: "What to do if your product isn’t selling?",
    subtitle: "Where should I post?",
    videoId: "5IV-hEPBjUA",
    imgSrc: videoImg,
    category: "Marketing",
  },
  {
    id: 5,
    title: "10 Best free online marketing",
    subtitle: "Where should I post?",
    videoId: "LTNxHkYOMVQ",
    imgSrc: videoImg,
    category: "Marketing",
  },
  {
    id: 6,
    title: "Level up your follower number now for free",
    subtitle: "Where should I post?",
    videoId: "qA5DR-As4mk",
    imgSrc: videoImg,
    category: "Learning",
  },
  {
    id: 7,
    title: "Top 10 reasons why your ad is not working",
    subtitle: "Where should I post?",
    videoId: "pyDQ-sgdP8k",
    imgSrc: videoImg,
    category: "Learning",
  },
  {
    id: 8,
    title: "What is the best method of marketing?",
    subtitle: "Where should I post?",
    videoId: "QQLJtC35U1c",
    imgSrc: videoImg,
    category: "Learning",
  },
  {
    id: 9,
    title: "The best marketing tool in 2024",
    subtitle: "Where should I post?",
    videoId: "8nDqLAMR9kY",
    imgSrc: videoImg,
    category: "Learning",
  },
  {
    id: 10,
    title: "The best sales funnel ever",
    subtitle: "Where should I post?",
    videoId: "PgooaHEExZg",
    imgSrc: videoImg,
    category: "Sales",
  },
  {
    id: 11,
    title: "Marketing vs sales",
    subtitle: "Where should I post?",
    videoId: "J7Hz2WpsPFI",
    imgSrc: videoImg,
    category: "Sales",
  },
  {
    id: 12,
    title: "Is influencers marketing important?",
    subtitle: "Where should I post?",
    videoId: "fCAX4gCfiLA",
    imgSrc: videoImg,
    category: "Sales",
  },
  {
    id: 13,
    title: "A secret they won’t tell you for your ad",
    subtitle: "Where should I post?",
    videoId: "La6XCk6Dbhw",
    imgSrc: videoImg,
    category: "Sales",
  },
];

export default NewsData;
