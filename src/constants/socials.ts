import { IconType } from "react-icons";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";

type Sicials = {
  title: string;
  icon: IconType;
  href: string;
};

export const SOCIALS: Array<Sicials> = [
  {
    title: "github",
    icon: BsGithub,
    href: "https://github.com/howooking",
  },
  {
    title: "instagram",
    icon: BsInstagram,
    href: "https://www.instagram.com/ho_woo1763/",
  },
  {
    title: "kakao",
    icon: RiKakaoTalkFill,
    href: "https://open.kakao.com/o/sDYwh86e",
  },
];
