

interface DataType {
  id?: number;
  title: string;
  subtitle: string;
  description: string;
}

const OurTargetData = (t: (key: string) => string): DataType[] => [
  {
    id: 1,
    title: t("title"),
    subtitle: t("subtitle"),
    description: t("description"),
  },
  
];

export default OurTargetData;
