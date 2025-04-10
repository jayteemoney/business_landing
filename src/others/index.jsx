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
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner5.png",
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