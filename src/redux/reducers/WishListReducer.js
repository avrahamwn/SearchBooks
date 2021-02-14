import {ADD_BOOK} from './../actions/add-book.action'
import {REMOVE_BOOK} from './../actions/RemoveBook.action'


export default function wishListReducer(state =  [], action ) {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload]
        case REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload.id)
        default:
            return state;

    }
}