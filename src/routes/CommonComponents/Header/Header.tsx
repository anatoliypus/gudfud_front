import React from 'react'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <button className={styles.sidebarButton}></button>
            <h1 className={styles.heading}>Goodfood</h1>
        </header>
    )
}
