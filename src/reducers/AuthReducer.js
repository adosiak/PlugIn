import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    USERNAME_NAME
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    username: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGED:
        // make a new object, take all existing properties from the existing state object and throw them into that object
        // then define the property email, give it a value of action.payload, and toss it on top of whatever properties
        // were on that state object
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return {
                ...state, ...INITIAL_STATE, user: action.payload
            };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false, };
        case USERNAME_NAME:
            return { ...state, error: '', [action.payload.prop]: action.payload.value, password: '', loading: false };
        default:
            return state;
    }
};
