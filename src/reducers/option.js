const optionReducer = (state = '', action) => {
    
    switch (action.type) {
        case 'SELECT_OPTION':
            return action.option;
        case 'CLEAR_SELECTED_OPTION':
            return '';
        default: return state;
    }
}

export default optionReducer