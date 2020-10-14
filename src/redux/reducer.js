import * as actionTypes from './actionTypes';

const initialState = {
    list: [{ id: 2, title: 'Work', completed: false }, { id: 1, title: 'Study', completed: true }]
}

const addItem = (state, action) => {
    const updatedList = [...state.list];
    updatedList.unshift(action.item);
    return {
        ...state,
        list: updatedList
    }
}

const deleteItem = (state, action) => {
    const updatedList = state.list.filter(item => item.id !== action.id);
    return {
        ...state,
        list: updatedList
    }
}

const completeItem = (state, action) => {
    const updatedList = state.list.map(item => {
        if (item.id === action.id) {
            const updatedItem = {
                ...item,
                completed: !item.completed
            };
            return updatedItem;
        }
        return item;
    })

    return {
        ...state,
        list: updatedList
    }
}

const modifyItem = (state, action) => {
    const updatedList = state.list.map(item => {
        if (item.id === action.id) {
            const updatedItem = {
                ...item,
                title: action.modifiedInput
            };
            return updatedItem;
        }
        return item;
    })

    return {
        ...state,
        list: updatedList
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: return addItem(state, action)
        case actionTypes.DELETE_ITEM: return deleteItem(state, action)
        case actionTypes.COMPLETE_ITEM: return completeItem(state, action)
        case actionTypes.MODIFY_ITEM: return modifyItem(state, action)
        default: return state
    }
}

export default reducer;