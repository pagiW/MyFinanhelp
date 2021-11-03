export const createUser = payload => ({
    type: 'CREATE',
    payload
});
export const getUser = payload => ({
    type: 'GET',
    payload
});
export const out = () => ({
    type: 'OUT',
})