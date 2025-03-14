import React from "react";
import styles from "../Header.module.css";

const HeaderListItem = ({
  children,
}: React.LiHTMLAttributes<HTMLLinkElement>) => {
  return <li className={styles.menuitem}>{children}</li>;
};

export default HeaderListItem;
