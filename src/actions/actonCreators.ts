export function changeSearch(search: string | null) {
    return {
        type: 'CHANGE_SEARCH',
        payload: search,
    }
}
