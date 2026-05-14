"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./styles.module.scss"
import Arrow from "../arrow/arrow"

interface SlideshowProps {
  pictures: (string | StaticImageData)[]
  title: string
  fadeDuration?: number
}

const Slideshow: React.FC<SlideshowProps> = ({ pictures, title, fadeDuration = 500 }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [nextImage, setNextImage] = useState<number | null>(null)

  const showNextImage = () => {
    const newIndex = currentImage === pictures.length - 1 ? 0 : currentImage + 1
    setNextImage(newIndex)
    setTimeout(() => {
      setCurrentImage(newIndex)
      setNextImage(null)
    }, fadeDuration)
  }

  const showPreviousImage = () => {
    const newIndex = currentImage === 0 ? pictures.length - 1 : currentImage - 1
    setNextImage(newIndex)
    setTimeout(() => {
      setCurrentImage(newIndex)
      setNextImage(null)
    }, fadeDuration)
  }

  const hasMultipleImages = pictures.length > 1

  useEffect(() => {
    pictures.forEach((src) => {
      const img = new window.Image()
      if (typeof src === "string") img.src = src
    })
  }, [pictures])

  return (
    <div className={styles.slideshow}>
      <div className={styles.imageWrapper}>
        <Image src={pictures[currentImage]} alt={title} className={styles.current} width={1200} height={1200}/>
        {nextImage !== null && (
          <Image src={pictures[nextImage]} alt={title} className={styles.next} width={1200} height={1200}/>
        )}
      </div>

      {hasMultipleImages && (
        <>
          <span onClick={showPreviousImage} className={styles.arrowLeft}>
            <Arrow rotation="0" />
          </span>
          <span onClick={showNextImage} className={styles.arrowRight}>
            <Arrow rotation="180" />
          </span>

          <p className={styles.counter}>
            {currentImage + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Slideshow