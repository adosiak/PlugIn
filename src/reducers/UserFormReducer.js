import {
    USER_FETCH_SUCCESS,
    USER_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_UPDATE:
        //ex: action.payload === { prop: 'name', value: 'jane' }
        //these [] are not an array! Known as key interpolation
            return { ...state, [action.payload.prop]: action.payload.value };
        case USER_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};