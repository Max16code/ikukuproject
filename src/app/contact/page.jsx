import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>lets keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/OIP.jpeg" alt="" fill={true}
          className={styles.image}/>
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input} />
          <input type='text' placeholder='email' className={styles.input} />
          <textarea className={styles.textarea}
           placeholder="message" id="" 
           cols="30"
            rows="10"
            ></textarea>
            <button className={styles.button}>contact</button>
        </form>

      </div>
    </div>
  )
}
