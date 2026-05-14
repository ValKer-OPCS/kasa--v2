import { FC } from 'react'
import styles from './styles.module.scss'

interface RatingProps {
  rating: number
  icon?: string
  maxRating?: number
  fillColor?: string
  emptyColor?: string
}

const Rating: FC<RatingProps> = ({ rating, icon = 'fa-solid fa-star', maxRating = 5, fillColor = '#FF6060', emptyColor = '#E3E3E3'}) => {
  return (
    <div className={styles.rating}>
      {Array.from({ length: maxRating }, (_, i) => {
        const isFilled = i + 1 <= rating
        return (
          <span key={i + 1} style={{ color: isFilled ? fillColor : emptyColor }}>
            <i className={icon}></i>
          </span>
        )
      })}
    </div>
  )
}

export default Rating