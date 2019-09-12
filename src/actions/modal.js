// SHOW MODAL ACTION
export const showModal = (modalProps) => ({
   type: 'SHOW_MODAL',
   modalProps
});

export const hideModal = () => ({
    type: 'HIDE_MODAL'
});

export const modalConfirm = (confirmType, id) => {
    return dispatch => {
        // do something on confirm?
    }
}