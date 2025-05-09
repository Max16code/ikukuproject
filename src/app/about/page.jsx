import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://blog.logrocket.com/wp-content/uploads/2022/04/Using-Next-js-middleware-Edge-Functions.png?w=300"
         fill={true} 
         alt=''
          className={styles.img}
          />
     
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award winning digital experiences
          </h2>
      </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Debitis quo ducimus consectetur fuga! Maxime itaque deleniti.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ea velit laborum vero laudantium optio dolore culpa possimus exercitationem
            omnis repellat. Necessitatibus neque culpa aliquid
            quidem sapiente unde sed fugiat ipsa!
            <br />
            <br />
            magni illum quod optio nesciunt culpa quo quibusdam,
            qui excepturi aliquid eos mollitia! Blanditiis.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore vel esse officia corrupti accusantium,
            <br />
            placeat voluptatem ad consequuntur voluptatum
            ea reiciendis ab qui accusamus dolores repudiandae,
            cupiditate iure quibusdam eum.
            Creative illustrations
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />Mobile Apps
          </p>
          <button className={styles.button}>contact</button>
        </div>
      </div>
    </div>

  )
}
