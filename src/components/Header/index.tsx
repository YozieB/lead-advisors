import logo from '../../images/logo.svg'
import styles from './Header.module.css'
import React from 'react'
import { IHeaderProps } from '../../utils/interfaces'

export const Header = ({ animate }: IHeaderProps) => {
  return (
    <header className={`${animate ? styles.header : styles.headerInit}`}>
      <a href="#" className={styles.link}>
        <img className={styles.image} src={logo} alt={logo} />
      </a>
    </header>
  )
}
