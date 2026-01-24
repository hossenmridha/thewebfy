interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  delay?: string;
}

const team_data: TeamMember[] = [
  {
    id: 1,
    name: "Arafat Hossain",
    title: "CEO & Founder",
    image: "assets/img/images/th-1/team-img-1.jpg",
    delay: "0",
  },
  {
    id: 2,
    name: "Mahmudul Hasan",
    title: "Senior Designer",
    image: "assets/img/images/th-1/team-img-2.jpg",
    delay: "0.2",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    title: "Web Developer",
    image: "assets/img/images/th-1/team-img-3.jpg",
    delay: "0.4",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    title: "Project Manager",
    image: "assets/img/images/th-1/team-img-4.jpg",
    delay: "0.6",
  },
];

export default team_data;
