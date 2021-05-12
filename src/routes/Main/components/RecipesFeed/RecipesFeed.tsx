import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AppType, Recipe } from '../../../../model/model'
import { FoodCard } from '../FoodCards/FoodCard'
import { getRecipes } from './getRecipes'
import styles from './RecipesFeed.module.css'
import {
    setRecipes,
    changeChoosedRecipe,
    changeOffset,
    addRecipes,
} from '../../../../actions/actionCreators'
import preloader from './img/preloader.svg'

interface RecipesFeedProps {
    search: string | null
    recipes: Recipe[]
    offset: number
    loadAmount: number
    setRecipes: (r: Recipe[]) => void
    addRecipes: (r: Recipe[]) => void
    changeChoosedRecipe: (r: Recipe | null) => void
    changeOffset: (o: number) => void
}

function RecipesFeed(props: RecipesFeedProps) {
    const [isShowButtonVisible, setIsShowButtonVisible] = useState(false)
    const [searchState, setSearchState] = useState<string | null>(props.search)

    React.useEffect(() => {
        async function fetchData(search: string | null) {
            if (search !== searchState) {
                props.changeOffset(0)
            }
            const data = await getRecipes(
                props.loadAmount,
                props.offset,
                search
            )
            if (data) {
                if (!props.recipes.length || search !== searchState) {
                    setIsShowButtonVisible(true)
                    setSearchState(search)
                    props.setRecipes(data)
                } else {
                    props.addRecipes(data)
                }
                if (!data.length) {
                    setIsShowButtonVisible(false)
                }
            }
        }
        fetchData(props.search)
    }, [props.search, props.loadAmount, props.offset])

    const showMoreHandler = () => {
        props.changeOffset(props.offset + props.loadAmount)
    }

    return (
        <div className={styles.RecipesFeedBlock}>
            <div className={styles.chooseModeBlock}>
                <button
                    className={`${styles.chooseModeButton} ${styles.chooseModeButtonActive}`}
                >
                    Рекомендуем
                </button>
                {/* <button className={styles.chooseModeButton}>Популярное</button> */}
            </div>
            {!props.recipes.length && (
                <img src={preloader} className={styles.preloader} />
            )}
            <div className={styles.recipesBlock}>
                {props.recipes &&
                    props.recipes.map((el, index) => (
                        <FoodCard
                            onclickHandler={props.changeChoosedRecipe}
                            recipe={el}
                            key={index}
                        />
                    ))}
                {isShowButtonVisible && (
                    <button
                        onClick={showMoreHandler}
                        className={styles.showMoreButton}
                    >
                        Показать еще!
                    </button>
                )}
            </div>
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
    addRecipes,
    changeOffset,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesFeed)
