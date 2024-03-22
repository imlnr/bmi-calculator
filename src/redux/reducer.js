import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action-types"

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    theme: false,
    user: {},
    bmihist: [],
    lastLogin: {},
    isError: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isError: false, isLoggedIn: true, user: action.payload };
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
}