import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { TbLanguage } from "react-icons/tb";




const Header = () => {
  return (
    <nav className={styles.header}>
        <Link href="/" className={styles.logo}>SysAdminHelper (Alpha v0.1)</Link>
        <div className={styles.nav}>
            <Link href="/generator" className={styles.link}>
              <GiPerspectiveDiceSixFacesRandom size={30}/>
              Генератор паролей</Link>
            <Link href="/translit" className={styles.link}>
              <TbLanguage size={25} />
              Транслитер</Link>
        </div>
    </nav>
  )
}

export default Header