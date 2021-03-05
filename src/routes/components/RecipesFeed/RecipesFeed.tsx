import React from 'react'
import { createRecipe } from '../../../constructors/constructors'
import { FoodCard } from '../FoodCards/FoodCard'
import styles from './RecipesFeed.module.css'

const recipe1 = createRecipe([], [], 10, [], ["https://eda.ru/img/eda/c88x88i/s2.eda.ru/StaticContent/Photos/120131085624/171210104827/p_O.jpg"], "Американские блины")

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
            <FoodCard recipe = {recipe1}></FoodCard>
        </div>
    )
}
