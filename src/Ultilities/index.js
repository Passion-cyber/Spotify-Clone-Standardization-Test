import { AiFillHome, AiOutlineCompass, AiTwotoneStar } from "react-icons/ai";
import { BsFillPeopleFill, BsStar } from "react-icons/bs";
import { CgPiano } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GiChart, GiGuitar, GiSelfLove, GiTrumpet } from "react-icons/gi";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineEventNote, MdOutlineNewspaper, MdOutlineSevereCold } from "react-icons/md";

export const Nav_Items = [
  {
    title: "Passion",
    text: "Cyber",
    Icon: FaReact,
  },
  {
    title: "Home",
    text: null,
    Icon: AiFillHome,
  },
  {
    title: "Trends",
    text: null,
    Icon: GiChart,
  },
  {
    title: "Feed",
    text: null,
    Icon: AiOutlineCompass,
  },
  {
    title: null,
    text: null,
    Icon: null, 
    heading: "Discover"
  },
  {
    title: "News",
    text: null,
    Icon: MdOutlineNewspaper,
  },
  {
    title: "Realese Calendar",
    text: null,
    Icon: HiOutlineCalendar,
  },
  {
    title: "Events",
    text: null,
    Icon: MdOutlineEventNote,
  },
  {
    title: null,
    text: null,
    Icon: null, 
    heading: "Your Collection"
  },
  {
    title: "Favorite Songs",
    text: null,
    Icon: GiSelfLove,
  },
  {
    title: "Artist",
    text: null,
    Icon: BsFillPeopleFill,
  },
  {
    title: "Album",
    text: null,
    Icon: BsStar,
  },
];


export const Shortcut_Items = [
  {
    title: "Chill Hits",
    Icon: MdOutlineSevereCold
  },
  {
    title: "Hop",
    Icon: AiTwotoneStar
  },
  {
    title: "Accoustic",
    Icon: GiGuitar
  },
  {
    title: "India Hop",
    Icon: IoIosMusicalNotes
  },
  {
    title: "Piano Blues",
    Icon: CgPiano
  },
  {
    title: "Jazz",
    Icon: GiTrumpet
  },
 
]
