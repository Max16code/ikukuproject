import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/button/button";

export default function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your idea into reality.We bring together the teams from the global tech industry</p>

        <button className={styles.button}>See our works</button>
      </div>

      <div className={styles.item}></div>
      <div>
        <Image src="https://blog.logrocket.com/wp-content/uploads/2022/06/implementing-ssr-next-js-dynamic-routing-prefetching.png?w=730" width={400} height={300} alt="" />
      </div>

      <Button></Button>
    </div>
  )
}

