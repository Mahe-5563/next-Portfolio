import { faLinkedin, faSquareGithub, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export const weburls = [
  {
    id: 1,
    name: "LinkedIn",
    src: "/icons/linkedin.png",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/maheshwar-arulraj/",
    icon: faLinkedin,
    about: true,
    home: true,
  },
  {
    id: 2,
    name: "GitHub",
    src: "/icons/github.png",
    alt: "GitHub",
    href: "https://github.com/Mahe-5563?tab=repositories",
    icon: faSquareGithub,
    about: true,
    home: true,
  },
  {
    id: 3,
    name: "Email",
    src: "/icons/email.png",
    alt: "Email",
    href: "mailto:mahepharulraj@gmail.com",
    about: false,
    home: true,
  },
  ,
  {
    id: 4,
    name: "Twitter",
    // src: "/icons/email.png",
    alt: "Twitter",
    href: "https://twitter.com/MahePotterhead",
    icon: faTwitterSquare,
    about: true,
    home: false,
  },
];

export const jsTWColors = {
  primaryColor: "#05071A",
  secondaryColor: "#D2C228",
}