import { Recipe } from '../model/model'

export function recipesReducer(state: Recipe[], action: any) {
    if (action.type === 'SET_RECIPES') {
        return action.payload
    }
    return state
}
