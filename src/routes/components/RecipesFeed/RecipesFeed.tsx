import React from 'react'
import styles from './RecipesFeed.module.css'

export function RecipesFeed() {
    return (
        <div className={styles.RecipesFeedBlock}>
            <div className={styles.chooseModeBlock}>
                <button
                    className={`${styles.chooseModeButton} ${styles.chooseModeButtonActive}`}
                >
                    Рекомендуем
                </button>
                <button className={styles.chooseModeButton}>Популярное</button>
            </div>
        </div>
    )
}
