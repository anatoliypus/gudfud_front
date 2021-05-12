import { Recipe } from '../model/model'

export function changeSearch(search: string | null) {
    return {
        type: 'CHANGE_SEARCH',
        payload: search,
    }
}

export function changeOffset(offset: number) {
    return {
        type: 'CHANGE_OFFSET',
        payload: offset,
    }
}

export function setRecipes(recipes: Recipe[]) {
    return {
        type: 'SET_RECIPES',
        payload: recipes,
    }
}

export function addRecipes(recipes: Recipe[]) {
    return {
        type: 'ADD_RECIPES',
        payload: recipes,
    }
}

export function changeChoosedRecipe(recipe: Recipe | null) {
    return {
        type: 'CHANGE_CHOOSED_RECIPE',
        payload: recipe,
    }
}
