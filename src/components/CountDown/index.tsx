import React from 'react'
import { useCountdown } from '../../hooks/useCountdown'
import styles from './CountDown.module.css'
import animations from '../../utils/animations.module.css'
import { ICountDownProps } from '../../utils/interfaces'

export const CountDown = ({ animate }: ICountDownProps) => {
  const { days, hours, minutes, seconds } = useCountdown('2023-05-31 00:00:00')
  return (
    <ul
      className={`${
        animate
          ? styles.countdown + ' ' + animations.loaded
          : styles.countdown + ' ' + animations.init
      }`}
      style={{ transitionDelay: '.4s' }}
    >
      <li className={styles.item}>
        {days}
        <div className={styles.text}>
          <div className={styles.lg}>Days</div>
          <div className={styles.sm}>DD</div>
        </div>
      </li>
      <li className={styles.item}>:</li>
      <li className={styles.item}>
        {hours}
        <div className={styles.text}>
          <div className={styles.lg}>Hours</div>
          <div className={styles.sm}>HH</div>
        </div>
      </li>
      <li className={styles.item}>:</li>
      <li className={styles.item}>
        {minutes}{' '}
        <div className={styles.text}>
          <div className={styles.lg}>Minutes</div>
          <div className={styles.sm}>MM</div>
        </div>
      </li>
      <li className={styles.item}>:</li>
      <li className={styles.item}>
        {seconds}{' '}
        <div className={styles.text}>
          <div className={styles.lg}>Seconds</div>
          <div className={styles.sm}>SS</div>
        </div>
      </li>
    </ul>
  )
}
