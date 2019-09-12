export const selectOption = (option) => ({
    type: 'SELECT_OPTION',
    option
});

export const clearSelectedOption = () => ({
   type: 'CLEAR_SELECTED_OPTION' 
});