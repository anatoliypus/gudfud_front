import React from 'react'
import styles from './FoodCard.module.css'
import { Recipe } from '../../../../model/model'
import like from './img/like.svg'
import plate from './img/plate.svg'
import time from './img/time.svg'

interface FoodCardProps {
    recipe: Recipe
}

export function FoodCard(props: FoodCardProps) {
    const style = {
        backgroundImage: `url(${props.recipe.images[0]})`,
    }
    return (
        <div className={styles.foodCard} style={style}>
            <div className={styles.foodCardInfo}>
                <span className={styles.mainInfo}>{props.recipe.title}</span>
                <div className={styles.cardProps}>
                    <div className={styles.elemProps}>
                        <img src={time} alt=""></img>
                        <p>{props.recipe.cookTime}</p>
                    </div>
                    <div className={styles.elemProps}>
                        <img src={plate} alt=""></img>
                        <p>6 порций</p>
                    </div>
                    <div className={styles.elemProps}>
                        <img src={like} alt=""></img>
                        <p>10000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
