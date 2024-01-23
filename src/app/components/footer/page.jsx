import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { MdAutorenew } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        2024 SysAdminHelper powered by{" "}
        <a href="https://vk.com/mska1inin" target="_blank">
          Mikhail Kalinin
        </a>
        . All rights reserved
      </div>
      <Link href="/updates" className={styles.link}>
        <MdAutorenew size={25} />
        Updates
      </Link>
    </footer>
  );
};

export default Footer;
