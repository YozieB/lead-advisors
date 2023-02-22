import React, { useState } from 'react'
import styles from './Events.module.css'
import image from '../../images/acc-img.png'
import { IAccItem, IKey } from '../../utils/interfaces'
import { AccItem } from '../AccItem'

export const Events = () => {
  const [openKey, setOpenKey] = useState<string>('Hawaiian party')

  const handleToggle = (key: string) => {
    setOpenKey(openKey !== key ? key : key)
  }

  const accData: IAccItem[] = [
    {
      title: 'Hawaiian party',
      image,
      id: '01',
      date: '13.02.2023',
    },
    {
      title: 'Mafia party',
      image,
      id: '02',
      date: '15.04.2023',
    },
    {
      title: 'Party',
      image,
      id: '03',
      date: '11.11.2023',
    },
    {
      title: 'Party on the beach',
      image,
      id: '04',
      date: '15.04.2023',
    },
    {
      title: 'Home Security',
      image,
      id: '05',
      date: '03.07.2023',
    },
    {
      title: 'Network Design & Implementation',
      image,
      id: '06',
      date: '08.08.2023',
    },
    {
      title: 'System Design & Engineering',
      image,
      id: '07',
      date: '06.05.2023',
    },
    {
      title: 'Client Care Plans',
      image,
      id: '08',
      date: '04.03.2023',
    },
  ]
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title} id="#events">
        All events
      </h2>
      <div className={styles.acc}>
        {accData.map(el => (
          <AccItem
            title={el.title}
            image={el.image}
            date={el.date}
            id={el.id}
            toggle={handleToggle}
            open={openKey === el.title}
            key={el.id}
          />
        ))}
      </div>
    </div>
  )
}
