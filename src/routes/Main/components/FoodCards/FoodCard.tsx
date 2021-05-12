import React from 'react'
import styles from './FoodCard.module.css'
import { Recipe } from '../../../../model/model'
import like from './img/like.svg'
import plate from './img/plate.svg'
import time from './img/time.svg'
import { useHistory } from 'react-router'

interface FoodCardProps {
    recipe: Recipe
    onclickHandler: (r: Recipe | null) => void
}

export function FoodCard(props: FoodCardProps) {
    const style = {
        backgroundImage: `url(${props.recipe.images[0]})`,
    }
    const history = useHistory()
    return (
        <div
            onClick={() => {
                props.onclickHandler(props.recipe)
                history.push('/RecipeCard')
            }}
            className={styles.foodCard}
            style={style}
        >
            <div className={styles.shadow}></div>
            <span className={styles.mainInfo}>{props.recipe.title}</span>
            <div className={styles.elemProps}>
                <img src={time} alt=""></img>
                <p>{props.recipe.cookTime}</p>
            </div>
        </div>
    )
}
