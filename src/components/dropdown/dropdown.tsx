'use client'

import { useState, ReactNode } from 'react'

interface DropdownProps {
  title: string
  children: ReactNode
  styles: Record<string, string>
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, styles }) => {
  const [open, setOpen] = useState(false)
  const toggleDropdown = () => setOpen(!open)

  return (
    <div className={`${styles.dropdown} ${open ? styles.open : ''}`}>
      <div className={styles.dropdown__title} onClick={toggleDropdown}>
        <p>{title}</p>
        <i className={`${styles.arrow} ${open ? styles.openArrow : ''} fa-solid fa-chevron-up`} />
      </div>

      <div className={styles.dropdown__text}>
        <div className={styles.dropdown__content}>{children}</div>
      </div>
    </div>
  )
}

export default Dropdown