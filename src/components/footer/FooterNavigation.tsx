import React from "react";

interface NavigationLink {
  text: string;
  href: string;
}

interface FooterNavigationProps {
  title: string;
  links: NavigationLink[];
  className?: string;
}

export const FooterNavigation = ({
  title,
  links,
  className = "",
}: FooterNavigationProps) => {
  return (
    <div className={`flex flex-col ${className} gap-3` }>
      <h3 className="text-[#F5F5F5] text-lg font-semibold  leading-6">
        {title}
      </h3>
      <nav className="flex flex-col gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="leading-6 text-[#B2A8BE] text-label font-medium hover:text-white transition-colors duration-200"
          >
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
