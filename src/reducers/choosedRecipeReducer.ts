import { Recipe } from '../model/model'

export default function choosedRecipeReducer(
    state: Recipe | null,
    action: any
) {
    if (action.type === 'CHANGE_CHOOSED_RECIPE') {
        return action.payload
    }
    return state
}
