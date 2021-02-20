import { createApp } from '../constructors/constructors'
import { AppType } from '../model/model'
import categoriesReducer from './categoriesReducer'
import recipesReducer from './recipesReducer'
import userReducer from './userReducer'

export default function appReducers(state: AppType = createApp(), action: any) {
    return {
        categories: categoriesReducer(state.categories, action),
        user: userReducer(state.user, action),
        recipes: recipesReducer(state.recipes, action),
    }
}
