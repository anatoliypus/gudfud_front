import React from 'react'
import styles from './RecipeCard.module.css'
import { AppType, Recipe } from '../../../../model/model'
import like from './img/like.svg'
import plate from './img/plate.svg'
import time from './img/time.svg'
import { connect } from 'react-redux'
import { Header } from '../Header/Header'
import { Link, useHistory } from 'react-router-dom'
import arrayBack from './img/arrow-left.svg'

interface RecipeCardProps {
    recipe: Recipe | null
}

function RecipeCard(props: RecipeCardProps) {
    const style = {
        backgroundImage: './img/TestRecipe.png',
    }
    const history = useHistory()
    if (!props.recipe) return null
    return (
        <>
            <div className={styles.RecipeCard} style={style}>
                <button
                    className={styles.linkBack}
                    onClick={() => {
                        history.push('/')
                    }}
                >
                    <img src={arrayBack} alt="" />
                </button>
                <Header />
                <img
                    src={props.recipe.images[0]}
                    alt=""
                    className={styles.mainImage}
                />
                <div className={styles.content}>
                    <h3 className={styles.mainHeading}>{props.recipe.title}</h3>
                    <hr className={styles.titleLine} />
                    <p className={styles.ingredientsTitle}>Ингредиенты</p>
                    {props.recipe.products.map((el, index) => {
                        return (
                            <div key={index} className={styles.ingredient}>
                                <p>{el}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state: AppType) => {
    return {
        recipe: state.choosedRecipe,
    }
}

export default connect(mapStateToProps)(RecipeCard)
