import {CHANGE_USERNAME} from './../actions/ChangeUsername.action'


export default function usernameReducer(state = { wishList: [], username: ''}, action ) {
    switch (action.type) {
        case CHANGE_USERNAME:
            return action.payload
        default:
            return state;

    }
}