import styles from './styles.module.scss'
import { ReactNode, CSSProperties } from 'react'
import Image, { StaticImageData } from 'next/image'

interface BannerProps {
  image: string | StaticImageData
  imageAlt: string
  overlayOpacity?: number
  children?: ReactNode
  imgWidth: number
  imgHeight: number
}

const Banner: React.FC<BannerProps> = ({ image, imageAlt, overlayOpacity = 0, children, imgWidth , imgHeight}) => {
  const style: CSSProperties & { [key: `--${string}`]: string | number } = {
    '--overlay-opacity': overlayOpacity
  }

  return (
    <div className={styles.banner} style={style}>
      <Image src={image} alt={imageAlt} width={imgWidth} height={imgHeight}/>
      {children}
    </div>
  )
}

export default Banner