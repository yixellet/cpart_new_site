'use client'

import { useState } from 'react'

/* Components */
import CarouselItem from './CarouselItem/CarouselItem'

import styles from './Carousel.module.css'

export default function Carousel() {

  const [items, setItems] = useState('')

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.arrow} ${styles.arrow_left}`}>
        
      </div>
      <ol className={styles.carousel}>
        <CarouselItem />
      </ol>
      <div className={`${styles.arrow} ${styles.arrow_right}`}>
        
      </div>
      <div className={styles.dots}>
        
      </div>
    </div>
  )
}
