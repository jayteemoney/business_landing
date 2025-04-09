// components/SocialIcons.jsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const iconsMap = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
};

export default function SocialIcons({ socials }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3">Follow Us</h4>
      <div className="flex space-x-4 text-xl">
        {socials.map((item, index) => (
          <a key={index} href={item.href} className="hover:text-white">
            {iconsMap[item.icon]}
          </a>
        ))}
      </div>
    </div>
  );
}
