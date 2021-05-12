import { Recipe } from '../model/model'

export function recipesReducer(state: Recipe[], action: any) {
    if (action.type === 'SET_RECIPES') {
        return action.payload
    } else if (action.type === 'ADD_RECIPES') {
        return state.concat(action.payload)
    }
    return state
}
