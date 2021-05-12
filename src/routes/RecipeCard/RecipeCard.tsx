import React from 'react'
import styles from './RecipeCard.module.css'
import { AppType, Recipe } from '../../model/model'
import like from './img/like.svg'
import plate from './img/plate.svg'
import bottomPanel from './img/bottomPanel.svg'
import strip from './img/strip.svg'
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
                    <div className={styles.title}
                         style={{
                             backgroundImage: `url(${strip})`,
                         }}
                    >
                        <h3 className={styles.mainHeading}>{props.recipe.title}</h3>
                        <hr className={styles.titleLine} />
                        <div className={styles.cardProps}>
                            <div className={styles.elemProps}>
                                <img src={time} alt=""></img>
                                <p className={styles.textBox}>{props.recipe.cookTime}</p>
                            </div>
                            <div className={styles.elemProps}>
                                <img src={plate} alt=""></img>
                                <p className={styles.textBox}>6 порций</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bigLine}></div>
                    <div className={styles.body}>
                        <p className={styles.ingredientsTitle}>Ингредиенты</p>
                        {props.recipe.products.map((el, index) => {
                            return (
                                <div key={index} className={styles.ingredient}>
                                    <p>{el}</p>
                                </div>
                            )
                        })}
                        <p className={styles.stepsTitle}>Инструкция по приготовлению:</p>
                        {props.recipe.steps.map((el, index) => {
                            return (
                                <div key={index} className={styles.ingredient}>
                                    <p className={styles.stepInd}>{index + 1}.</p>
                                    <p>{el}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.bottomPanel}
                        style={{
                            backgroundImage: `url(${bottomPanel})`
                        }}
                    >
                    </div>
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
