

interface SocialLink {
  name: string;
  link: string;
  iconWhite: string;
  iconBlack: string;
}

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  delay?: string; 
  socials?: SocialLink[]; 
}


const socials = [
  {
    name: "Twitter",
    link: "http://www.twitter.com",
    iconWhite: "assets/img/icons/icon-logo-buttery-white-twitter.svg",
    iconBlack: "assets/img/icons/icon-logo-black-twitter.svg",
  },
  {
    name: "Facebook",
    link: "http://www.facebook.com",
    iconWhite: "assets/img/icons/icon-logo-buttery-white-facebook.svg",
    iconBlack: "assets/img/icons/icon-logo-black-facebook.svg",
  },
  {
    name: "Instagram",
    link: "http://www.instagram.com",
    iconWhite: "assets/img/icons/icon-logo-buttery-white-instagram.svg",
    iconBlack: "assets/img/icons/icon-logo-black-instagram.svg",
  },
  {
    name: "LinkedIn",
    link: "http://www.linkedin.com",
    iconWhite: "assets/img/icons/icon-logo-buttery-white-linkedin.svg",
    iconBlack: "assets/img/icons/icon-logo-black-linkedin.svg",
  },
];

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
    socials: socials,
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    title: "Web Developer",
    image: "assets/img/images/th-1/team-img-3.jpg",
    delay: "0.4",
    socials: socials,
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    title: "Project Manager",
    image: "assets/img/images/th-1/team-img-4.jpg",
    delay: "0.6",
    socials: socials,
  },
];

export default team_data;