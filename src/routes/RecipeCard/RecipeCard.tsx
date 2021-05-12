import React from 'react'
import styles from './RecipeCard.module.css'
import { AppType, Recipe } from '../../model/model'
import like from './img/like.svg'
import plate from './img/plate.svg'
import time from './img/time.svg'
import { connect } from 'react-redux'
import { Header } from '../CommonComponents/Header/Header'
import { useHistory } from 'react-router-dom'
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
            <Header />
            <div className={styles.RecipeCard} style={style}>
                <button
                    className={styles.linkBack}
                    onClick={() => {
                        history.push('/')
                    }}
                >
                    <img src={arrayBack} alt="" />
                </button>
                <div
                    className={styles.mainImage}
                    style={{
                        backgroundImage: `url(${props.recipe.images[0]})`,
                    }}
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