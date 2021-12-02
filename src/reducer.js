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
        case 'GETP':
            state.user.products.push(action.payload);
            const update = state.users.filter(u => u.user !== state.user.user && u.email !== state.user.email && u.password !== state.user.password);
            return {
                ...state,
                users: [...update, state.user]
            }
        default:
            return state;
    }
}

export default reducer;