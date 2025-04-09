// components/FooterLinkGroup.jsx
export default function FooterLinkGroup({ title, links }) {
    return (
      <div>
        <h4 className="text-white font-semibold mb-3">{title}</h4>
        <ul className="space-y-2 text-sm">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  