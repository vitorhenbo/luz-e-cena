import React from "react";
import Link from "../../Link";

interface MenuItem extends React.HtmlHTMLAttributes<HTMLLIElement> {
  href?: string;
}

const MenuItem = ({ children, href = "#" }: MenuItem) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MenuItem;
