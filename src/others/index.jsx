import { FaStar, FaShieldAlt, FaPaperPlane } from 'react-icons/fa';
export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        { label: "Content", href: "#" },
        { label: "How it Works", href: "#" },
        { label: "Create", href: "#" },
        { label: "Explore", href: "#" },
        { label: "Terms & Services", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Suggestions", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Newsletters", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      socials: [
        { icon: "facebook", href: "#" },
        { icon: "twitter", href: "#" },
        { icon: "instagram", href: "#" },
      ],
    },
  ];

  export const partners = [
    "/src/assets/Vector.png",
    "/src/assets/path16.png",
    "/src/assets/Vector (1).png",
    "/src/assets/Group 481737.png",
    
  ];
  
  export const features = [
    {
      icon: <FaStar className="text-cyan-400 text-xl" />,
      title: "Rewards",
      desc: "The best credit cards offer some tantalizing combinations of promotions and prizes.",
    },
    {
      icon: <FaShieldAlt className="text-cyan-400 text-xl" />,
      title: "100% Secured",
      desc: "We take proactive steps to make sure your information and transactions are secure.",
    },
    {
      icon: <FaPaperPlane className="text-cyan-400 text-xl" />,
      title: "Balance Transfer",
      desc: "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];

  export const stats = [
    { value: "3800+", label: "USER ACTIVE" },
    { value: "230+", label: "TRUSTED BY COMPANY" },
    { value: "$230M+", label: "TRANSACTION" },
  ];

 export const testimonials = [
    {
      text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      avatar: "/src/assets/Image (2).png",
    },
    {
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "CEO, FinTrack",
      avatar: "/src/assets/Image (3).png",
    },
    {
      text: "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "CTO, MoneyFlow",
      avatar: "/src/assets/Image.png",
    },
  ];