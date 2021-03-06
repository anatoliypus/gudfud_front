import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AppType, Recipe } from '../../../../model/model'
import { FoodCard } from '../FoodCards/FoodCard'
import { getRecipes } from './getRecipes'
import styles from './RecipesFeed.module.css'

interface RecipesFeedProps {
    search: string | null
}

function RecipesFeed(props: RecipesFeedProps) {
    const [recipes, setRecipes] = useState<Recipe[]>([])

    React.useEffect(() => {
        async function fetchData(search: string | null) {
            const data = await getRecipes(search)
            if (data) {
                setRecipes(data)
            }
        }
        fetchData(props.search)
    }, [props.search])

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
            {recipes.map((el, index) => (
                <FoodCard recipe={el} key={index} />
            ))}
        </div>
    )
}

const mapStateToProps = (state: AppType) => {
    return {
        search: state.search,
    }
}

export default connect(mapStateToProps)(RecipesFeed)
