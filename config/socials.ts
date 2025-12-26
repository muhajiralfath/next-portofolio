import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@muhajiralfath",
    icon: Icons.gitHub,
    link: "https://github.com/muhajiralfath",
  },
  {
    name: "LinkedIn",
    username: "Muhammad Muhajir Al Fath",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/muhajiralfath",
  },
  {
    name: "Twitter",
    username: "@muhajiralfath",
    icon: Icons.twitter,
    link: "https://twitter.com/muhajiralfath",
  },
  {
    name: "Gmail",
    username: "mmuhajiralfath",
    icon: Icons.gmail,
    link: "mailto:muhammadmuhajiralfath@gmail.com",
  },
];
