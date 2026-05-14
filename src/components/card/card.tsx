import Image, { StaticImageData } from 'next/image'


interface CardProps {
  cover: string | StaticImageData
  title: string
  styles: { [key: string]: string }
  imgWidth: number
  imgHeight: number
}

const Card: React.FC<CardProps> = ({ cover, title, styles, imgWidth, imgHeight }) => {
  return (
    <figure className={styles.card}>
      <Image src={cover} alt={title} width={imgWidth} height={imgHeight} />
      <figcaption>{title}</figcaption>
    </figure>
  )
}

export default Card