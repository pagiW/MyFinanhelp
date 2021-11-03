const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                user: action.payload,
                users: [...state.users, action.payload]
            }
        case 'GET':
            return {
                ...state,
                user: action.payload,
            }
        case 'OUT':
            return {
                ...state,
                user: {}
            }
        default:
            return state;
    }
}

export default reducer;