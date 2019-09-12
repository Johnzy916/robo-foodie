export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                uid: action.uid
            };
        case 'SET_USER_NAME':
            return {
              ...state,
              userName: action.userName
            };
        case 'IS_FIRST_TIME_USER':
            return {
                ...state,
                isFirstTimeUser: action.bool
            }
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};