import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div>2023 SysAdminHelper powered by <a href='https://vk.com/mska1inin' target='_blank'>Mikhail Kalinin</a>. All rights reserved</div>
    </footer>
  )
}

export default Footer