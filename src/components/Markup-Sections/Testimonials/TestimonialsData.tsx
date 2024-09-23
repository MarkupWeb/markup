import img01 from "../../../../public/images/about/imgOne.svg";
import img02 from "../../../../public/images/about/imgTwo.svg";
import img03 from "../../../../public/images/about/imgThree.svg";

interface TestimonialDataType {
  id?: number;
  clientName: string;
  feedback: string;
  imgSrc: string;
  designation: string;
  company: string;
  rating: number;
}

const TestimonialsData = (t: (key: string) => string): TestimonialDataType[] => [
  {
    id: 1,
    clientName: "John Doe",
    feedback: "This service exceeded our expectations. The team was professional, and the results were outstanding!",
    imgSrc: img01,
    designation: "CEO",
    company: "Tech Innovators Inc.",
    rating: 5.0,
  },
  {
    id: 2,
    clientName: "Jane Smith",
    feedback: "We saw a significant improvement in our workflow after implementing their solutions. Highly recommended.",
    imgSrc: img02,
    designation: "CTO",
    company: "NextGen Solutions",
    rating: 4.8,
  },
  {
    id: 3,
    clientName: "Michael Brown",
    feedback: "Amazing experience! The team understood our needs and delivered beyond what we expected.",
    imgSrc: img03,
    designation: "Head of Marketing",
    company: "Creative Minds Co.",
    rating: 4.9,
  },
  {
    id: 4,
    clientName: "Emily Davis",
    feedback: "Their attention to detail and commitment to delivering quality work is impressive. We’ll definitely be working with them again.",
    imgSrc: img02,
    designation: "Project Manager",
    company: "Bright Futures Ltd.",
    rating: 4.7,
  },
  {
    id: 5,
    clientName: "Chris Wilson",
    feedback: "Professional and reliable. The team was responsive and made sure everything ran smoothly.",
    imgSrc: img03,
    designation: "Operations Manager",
    company: "Efficient Logistics",
    rating: 4.8,
  },
  {
    id: 6,
    clientName: "Laura Johnson",
    feedback: "We were impressed with the quality and timeliness of the project delivery. Highly recommended for anyone looking for great results.",
    imgSrc: img01,
    designation: "Director",
    company: "Global Ventures",
    rating: 5.0,
  },
  {
    id: 7,
    clientName: "Daniel Thompson",
    feedback: "They provided top-notch service and went above and beyond to meet our expectations.",
    imgSrc: img02,
    designation: "Founder",
    company: "Tech Pioneers",
    rating: 4.9,
  },
];

export default TestimonialsData;
