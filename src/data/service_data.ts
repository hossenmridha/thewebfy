 
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}
 
 
const service_data: ServiceItem[] = [
  {
    id: 1,
    title: "1. Product Development:",
    description: "Our expertise in various fields, such as management, finance, marketing, or technology, to help businesses solve problems.",
    image: "assets/img/images/th-2/service-img-1.png",
  },
  {
    id: 2,
    title: "2. Consulting & Advisory:",
    description: "We invest in startups or take an equity stake in exchange or direct investment or have their own seed funds to support.",
    image: "assets/img/images/th-2/service-img-2.png",
  },
  {
    id: 3,
    title: "3. Investment and Equity:",
    description: "We invest in startups or take an equity stake in exchange or direct investment or have their own seed funds to support.",
    image: "assets/img/images/th-2/service-img-3.png",
  },
  {
    id: 4,
    title: "4. Co-Working Spaces:",
    description: "We provide co-working spaces or office facilities for startups can work, collaborate, and access essential resources.",
    image: "assets/img/images/th-2/service-img-4.png",
  },
  {
    id: 5,
    title: "5. Legal & Administrative:",
    description: "Offer legal and administrative assistance, helping startups with tasks like business registration, intellectual property etc.",
    image: "assets/img/images/th-2/service-img-5.png",
  },
];

export default service_data;
