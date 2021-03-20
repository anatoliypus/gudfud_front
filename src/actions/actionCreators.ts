import { Recipe } from '../model/model'

export function changeSearch(search: string | null) {
    return {
        type: 'CHANGE_SEARCH',
        payload: search,
    }
}

export function setRecipes(recipes: Recipe[]) {
    return {
        type: 'SET_RECIPES',
        payload: recipes,
    }
}

export function changeChoosedRecipe(recipe: Recipe | null) {
    return {
        type: 'CHANGE_CHOOSED_RECIPE',
        payload: recipe,
    }
}
