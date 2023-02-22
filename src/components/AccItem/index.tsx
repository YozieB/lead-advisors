import { IAccItemC } from '../../utils/interfaces'
import styles from './AccItem.module.css'

export const AccItem = ({
  title,
  image,
  id,
  date,
  toggle,
  open,
}: IAccItemC) => {
  return (
    <>
      <div
        className={`${styles.item} ${open && styles.itemActive}`}
        onClick={() => toggle(title)}
        style={{
          background: `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%), url(${image})`,
        }}
      >
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.id}>{id}</p>
        <div className={styles.border}></div>
      </div>
      <div
        className={`${styles.content} ${open && styles.contentActive}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.inner}>
          <p className={styles.innerId}>{id}</p>
          <h4 className={styles.innerTitle}>{title}</h4>
          <p className={styles.innerDate}>{date}</p>
          <a
            href="https://google.com"
            target="_blank"
            className={styles.innerButton}
            rel="noreferrer"
          >
            More information
          </a>
        </div>
      </div>
    </>
  )
}
