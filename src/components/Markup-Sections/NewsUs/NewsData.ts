import videoImg from "../../../../public/images/news/branding.jpg";

interface DataType {
    title?: string;
    subtitle?: string;
    imgSrc?: any;
    name?: string;
    
    category?: string;
  }
  const NewsData = (t: (key: string) => string): DataType[] => [
    {
        title: "Full stack modern",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
        name: "Colt stelle",
        imgSrc: videoImg,
        category: "Blogs",
      },

      {
        title: "Full stack modern",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
        name: "Colt stelle",
        imgSrc: videoImg,
        category: "Blogs",
      },

      

      {
        title: "Design system",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
        name: "Colt stelle",
        imgSrc: videoImg,
        
        category: "Orange one",
      },
      {
        title: "Design banner",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
        name: "Colt stelle",
        imgSrc: videoImg,
        
        category: "Apple two",
      },
      {
        title: "Design banner",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!",
        name: "Colt stelle",
        imgSrc: videoImg,
        
        category: "Apple two",
      },
      
  ];
  
  export default NewsData;
  