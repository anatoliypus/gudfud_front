import { createApp } from '../constructors/constructors'
import { AppType } from '../model/model'
import categoriesReducer from './categoriesReducer'
import choosedRecipeReducer from './choosedRecipeReducer'
import { recipesReducer } from './recipesReducer'
import searchReducer from './searchReducer'
import userReducer from './userReducer'

export default function appReducers(
    state: AppType = createApp(),
    action: any
): AppType {
    return {
        categories: categoriesReducer(state.categories, action),
        user: userReducer(state.user, action),
        search: searchReducer(state.search, action),
        recipes: recipesReducer(state.recipes, action),
        choosedRecipe: choosedRecipeReducer(state.choosedRecipe, action),
    }
}
