import styles from './App.module.css'
import animations from '../../utils/animations.module.css'
import { Header } from '../Header'
import { CountDown } from '../CountDown'
import imageArrow from '../../images/arrow-right.svg'
import { Search } from '../Search'
import { Events } from '../Events'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal'

function App() {
  const [animate, setAnimate] = useState<boolean>(false)
  const [active, setActive] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <>
      <div className={`${animate ? styles.app : styles.appInit}`}>
        <Header animate={animate} />
        <h1
          className={`${
            animate
              ? styles.title +
                ' ' +
                animations.loaded +
                ' ' +
                styles.titleLoaded
              : styles.title + ' ' + animations.init
          }`}
        >
          Under Construction
        </h1>
        <p
          className={`${
            animate
              ? styles.text + ' ' + animations.loaded
              : animations.init + ' ' + styles.text
          }`}
          style={{ transitionDelay: '.2s' }}
        >
          We're making lots of improvements and will be back soon
        </p>
        <CountDown animate={animate} />
        <p
          className={`${
            animate
              ? styles.text + ' ' + animations.loaded
              : styles.text + ' ' + animations.init
          }`}
          style={{ transitionDelay: '.6s' }}
        >
          Check our event page when you wait:
        </p>
        <a
          href="#"
          className={`${
            animate
              ? styles.button + ' ' + animations.loaded
              : styles.button + ' ' + animations.init
          }`}
          style={{ transitionDelay: '.6s' }}
        >
          <div className={styles.buttonText}>Go to the event</div>
          <img src={imageArrow} alt="Arrow" />
        </a>
      </div>
      <Search setActive={setActive} />
      <Events />
      <Modal active={active} setActive={setActive} />
    </>
  )
}

export default App
