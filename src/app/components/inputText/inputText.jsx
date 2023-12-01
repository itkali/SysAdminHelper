import React from 'react'
import styles from "./page.module.css"

const InputText = ({text}) => {
  return (
    <input className={styles.input} type='text' />
  )
}

export default InputText