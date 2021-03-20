import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AppType, Recipe } from '../../../../model/model'
import { FoodCard } from '../FoodCards/FoodCard'
import { getRecipes } from './getRecipes'
import styles from './RecipesFeed.module.css'
import { setRecipes } from '../../../../actions/actionCreators'

interface RecipesFeedProps {
    search: string | null
    recipes: Recipe[]
    setRecipes: (r: Recipe[]) => void
}

function RecipesFeed(props: RecipesFeedProps) {
    React.useEffect(() => {
        async function fetchData(search: string | null) {
            const data = await getRecipes(search)
            if (data) {
                props.setRecipes(data)
            }
        }
        fetchData(props.search)
    }, [props])

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
            {props.recipes.map((el, index) => (
                <FoodCard recipe={el} key={index} />
            ))}
        </div>
    )
}

const mapStateToProps = (state: AppType) => {
    return {
        search: state.search,
        recipes: state.recipes,
    }
}

const mapDispatchToProps = {
    setRecipes,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesFeed)
