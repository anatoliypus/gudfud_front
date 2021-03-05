import React from 'react'
import styles from './FoodCard.module.css'
import {Recipe} from '../../../model/model'
import like from './img/like.svg'
import plate from './img/plate.svg'
import time from './img/time.svg'

interface FoodCardProps {
    recipe: Recipe,
}

export function FoodCard(props: FoodCardProps) {
    const style = {
        backgroundImage: "url(https://eda.ru/img/eda/-x900i/s2.eda.ru/StaticContent/Photos/120131085624/171210104827/p_O.jpg)",
    }
    return (
        <div className={styles.foodCard} style={style}>
            <div className={styles.foodCardInfo}>
                <span className={styles.mainInfo}>{props.recipe.title}</span>
                <div className={styles.cardProps}>
                    <div className={styles.elemProps}>
                        <img src={time}></img>
                        <p>{props.recipe.cookTime} минут</p>
                    </div>
                    <div className={styles.elemProps}>
                        <img src={plate}></img>
                        <p>6 порций</p>
                    </div>
                    <div className={styles.elemProps}>  
                        <img src={like}></img>
                        <p>10000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
