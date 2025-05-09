import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


export default function Footer() {
  return (
    <div className={styles.container}>
      <div>2025 MAXdev. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/icons8-facebook-48.png" width={20} height={20} className={styles.icon} alt="Maxdev" />
        <Image src="/icons8-instagram-48.png" width={20} height={20} className={styles.icon} alt="Maxdev" />
        <Image src="/icons8-linkedin-48.png" width={20} height={20} className={styles.icon} alt="Maxdev" />
        <Image src="/icons8-x-48.png" width={20} height={20} className={styles.icon} alt="Maxdev" />
      </div>
    </div>
  );
}
