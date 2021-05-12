import React from 'react'
import { connect } from 'react-redux'
import { AppType, Recipe } from '../../../../model/model'
import { FoodCard } from '../FoodCards/FoodCard'
import { getRecipes } from './getRecipes'
import styles from './RecipesFeed.module.css'
import {
    setRecipes,
    changeChoosedRecipe,
} from '../../../../actions/actionCreators'
import preloader from './img/preloader.svg'

interface RecipesFeedProps {
    search: string | null
    recipes: Recipe[]
    offset: number
    loadAmount: number
    setRecipes: (r: Recipe[]) => void
    changeChoosedRecipe: (r: Recipe | null) => void
}

function RecipesFeed(props: RecipesFeedProps) {
    React.useEffect(() => {
        async function fetchData(search: string | null) {
            const data = await getRecipes(
                props.loadAmount,
                props.offset,
                search
            )
            if (data) {
                props.setRecipes(data)
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
            {!props.recipes.length && (
                <img src={preloader} className={styles.preloader} />
            )}
            {props.recipes &&
                props.recipes.map((el, index) => (
                    <FoodCard
                        onclickHandler={props.changeChoosedRecipe}
                        recipe={el}
                        key={index}
                    />
                ))}
        </div>
    )
}

const mapStateToProps = (state: AppType) => {
    return {
        search: state.search,
        recipes: state.recipes,
        offset: state.offset,
        loadAmount: state.loadAmount,
    }
}

const mapDispatchToProps = {
    setRecipes,
    changeChoosedRecipe,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesFeed)
