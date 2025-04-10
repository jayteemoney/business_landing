// components/Footer.jsx
import FooterLinkGroup from "../others/FooterLinkGroup";
import SocialIcons from "../others/SocialIcons";
import { footerLinks } from '../others'
import Logo from "../others/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#00040F]  text-gray-400 px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div>
          <Logo/>
          <p className="text-sm leading-relaxed">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Dynamic Footer Blocks */}
        {footerLinks.map((group, index) =>
          group.links ? (
            <FooterLinkGroup key={index} title={group.title} links={group.links} />
          ) : (
            <SocialIcons key={index} socials={group.socials} />
          )
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HooBank. All Rights Reserved.
      </div>
    </footer>
  );
}
