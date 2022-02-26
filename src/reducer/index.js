import { actions } from "../constants";

const initialState = {
    loggedIn: false,
    currentUser: null,
    attendance: {
        total: 0,
        absent: 0,
        leave: 0,
        present: 0
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.LOGIN:
            return {...state, loggedIn: true, currentUser: action.payload.user}
        case actions.LOGOUT:
            return {...state, loggedIn: false, currentUser: null}
        default:
            return state;
    }
}

export default reducer;