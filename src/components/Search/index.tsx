import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import arrowBottom from '../../images/arrow-bottom.svg'
import { ISearchProps } from '../../utils/interfaces'

export const Search = ({ setActive }: ISearchProps) => {
  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    document
      .getElementById('#events')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <form
          className={styles.form}
          onSubmit={e => {
            e.preventDefault()
            setActive(true)
            // Тут мы можем отправить любой fetch-запрос
            // И на основании промиса, т.е. ответа от сервера отрисовать нужный нам попап
            // Сейчас по дефолту отрисовывается просто попап с успешной подпиской
          }}
        >
          <input
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
            placeholder="Enter your Email and get notified"
            className={styles.input}
            type="email"
          ></input>
          <button className={styles.button} type="submit"></button>
        </form>
        <button onClick={handleClick} className={styles.moreBtn}>
          Other Events
          <img src={arrowBottom} alt="Arrow" />
        </button>
      </div>
    </div>
  )
}
