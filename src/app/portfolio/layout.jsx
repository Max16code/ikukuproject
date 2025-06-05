import React from 'react'
import Styles from './page.module.css'

export default function layout({children}) {
  return (
    <div>
      <h1 className={Styles.maintitle}>Our works</h1>
      {children}
    </div>
  )
}
