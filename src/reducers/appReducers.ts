import { createApp } from '../constructors/constructors'
import { AppType } from '../model/model'
import categoriesReducer from './categoriesReducer'
import searchReducer from './searchReducer'
import userReducer from './userReducer'

export default function appReducers(state: AppType = createApp(), action: any) {
    return {
        categories: categoriesReducer(state.categories, action),
        user: userReducer(state.user, action),
        search: searchReducer(state.search, action),
    }
}
