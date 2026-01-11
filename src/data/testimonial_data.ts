

interface TestimonialType {
  id: number;
  name: string;
  position: string;
  title: string;
  description: string;
  image: string;
  delay?: string;
}

const testimonial_data: TestimonialType[] = [
  {
    id: 1,
    name: "William Jack",
    position: "Founder@XYZ",
    title: "Super customer service!",
    description:
      "Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.",
    image: "assets/img/images/th-1/testimonial-user-img-1.png",
    delay: "0",
  },
  {
    id: 2,
    name: "Smith Align",
    position: "Businessman",
    title: "Exceptional creativity and vision",
    description:
      "Working with Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they designed perfectly captures our essence & has become instantly recognizable. We couldn't be happier with the results!",
    image: "assets/img/images/th-1/testimonial-user-img-2.png",
    delay: "0.3",
  },
  
];

export default testimonial_data;