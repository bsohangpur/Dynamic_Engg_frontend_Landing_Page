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
    link: "https://www.facebook.com/profile.php?id=000000000000000",
    colorScheme: "facebook",
  },
  {
    name: "twitter",
    icon: FaTwitter,
    link: "https://www.twitter.com/profile.php?id=000000000000000",
    colorScheme: "twitter",
  },
  {
    name: "instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/profile.php?id=000000000000000",
    colorScheme: "pink",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/profile.php?id=000000000000000",
    colorScheme: "linkedin",
  },
  {
    name: "email",
    icon: FaEnvelope,
    link: "mailto:XXXXXXXXXXXXXXXX",
    colorScheme: "blue",
  },
  {
    name: "phone",
    icon: FaPhone,
    link: "tel:XXXXXXXXXXXXXXXX",
    colorScheme: "teal",
  },
];

export default socials;
