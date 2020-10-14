import * as actionTypes from './actionTypes';

export const addItem = (item) => {
    return {
        type: actionTypes.ADD_ITEM,
        item: item,
    }
}
export const deleteItem = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
        id: id,
    }
}
export const completeItem = (id) => {
    return {
        type: actionTypes.COMPLETE_ITEM,
        id: id,
    }
}
export const modifyItem = (id, modifiedInput) => {
    return {
        type: actionTypes.MODIFY_ITEM,
        modifiedInput: modifiedInput,
        id: id
    }
}