export default function searchReducer(
    state: string | null = null,
    action: any
): string | null {
    if (action.type === 'CHANGE_SEARCH') {
        return action.payload
    }
    return state
}
