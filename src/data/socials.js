import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const socials = [
  {
    name: "facebook",
    icon: FaFacebook,
    link: "",
    colorScheme: "facebook",
  },
  {
    name: "twitter",
    icon: FaTwitter,
    link: "",
    colorScheme: "twitter",
  },
  {
    name: "instagram",
    icon: FaInstagram,
    link: "",
    colorScheme: "pink",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    link: "",
    colorScheme: "linkedin",
  },
  {
    name: "email",
    icon: FaEnvelope,
    link: "mailto:",
    colorScheme: "blue",
  },
  {
    name: "phone",
    icon: FaPhone,
    link: "tel:",
    colorScheme: "teal",
  },
];

export default socials;
