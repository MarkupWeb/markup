
interface DataType {
  id?: number;
  question?: string;
  answer?: string;
  
}


const NewsData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    question: "Marketing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
    
  },
  
]