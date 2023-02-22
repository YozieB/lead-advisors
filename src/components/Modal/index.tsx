import React, { MouseEventHandler } from 'react'
import styles from './Modal.module.css'
import { IModalProps } from '../../utils/interfaces'

export const Modal = ({ active, setActive }: IModalProps) => {
  return (
    <div
      className={styles.wrapper + ' ' + `${active && styles.active}`}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.content + ' ' + `${active && styles.active}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={() => setActive(false)}
        />
        <h4 className={styles.title}>SUCCESS!</h4>
        <p className={styles.text}>
          You have successfully subscribed to the email newsletter
        </p>
        <button className={styles.bigButton} onClick={() => setActive(false)}>
          Close
        </button>
      </div>
    </div>
  )
}
