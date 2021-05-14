import { Category } from '../model/model'

export default function categoriesReducer(
    state: Category[] | null = null,
    action: any
): Category[] | null {
    if (action.type === 'CHANGE_CATEGORY') {
        return action.payload
    }
    return state
}
