import React from 'react'
import styles from './RecipeCard.module.css'
import {Recipe} from '../../../../model/model'
import like from './img/like.svg'
import plate from './img/plate.svg'
import time from './img/time.svg'

interface RecipeCardProps {
    recipe: Recipe,
}

export function RecipeCard(props: RecipeCardProps) {
    const style = {
        backgroundImage: "./img/TestRecipe.png",
    }
    return (
        <div className={styles.RecipeCard} style={style}>
            <div className={styles.RecipeTitle} style={style}>
                <div className={styles.RecipeName}><p>{props.recipe.title}</p></div>
                <div className={styles.RecipeAuthor} style={style}></div>
            </div>
                <div className={styles.RecipeDescription} style={style}>
                    <div className={styles.CookingTime} style={style}>
                        <img src={time}></img>
                        <p>{props.recipe.cookTime} минут</p>
                    </div>
                    <div className={styles.AmountPortions} style={style}>
                        <img src={plate}></img>
                        <p>6 порций</p>
                    </div>
                    <div className={styles.Mark} style={style}>
                        <img src={like}></img>
                        <p>10000</p>    
                    </div>
                </div>
            <div className={styles.RecipeIngridients} style={style}>
                <div className={styles.Ingridient} style={style}>
                </div>
            </div>
        </div>
    )
}