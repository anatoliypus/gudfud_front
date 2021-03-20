import React from 'react'
import { createRecipe } from '../../../../constructors/constructors'
import { RecipeCard } from './RecipeCard'
import styles from './RecipeFeedCart.module.css'

const recipe1 = createRecipe([], [], 10, [], ["https://eda.ru/img/eda/c88x88i/s2.eda.ru/StaticContent/Photos/120131085624/171210104827/p_O.jpg"], "Американские блины")

export function RecipeFeedCard() {
    return (
        <div className={styles.RecipesCardBlock}>
            <RecipeCard recipe = {recipe1}></RecipeCard>
        </div>
    )
}

