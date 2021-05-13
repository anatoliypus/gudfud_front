export default function offsetReducer(state: number, action: any) {
    if (action.type === 'CHANGE_OFFSET') {
        return action.payload
    }
    return state
}
