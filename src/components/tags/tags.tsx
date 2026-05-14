import { FC } from 'react'
import styles from './styles.module.scss'

interface TagsProps {
  data: string[]
}

const Tags: FC<TagsProps> = ({ data }) => {
  return (
    <div className={styles.tags}>
      {data.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  )
}

export default Tags