import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    USERNAME_NAME
 } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const setUsername = ({ prop, value }) => {
    return {
        type: USERNAME_NAME,
        payload: { prop, value }
    };
};


export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => loginUserFail(dispatch, error));
    };
};

export const signInUser = ({ email, password, username }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                signInUserSuccess(dispatch, username, user)})
            .catch(error => {
                loginUserFail(dispatch, error) });
    };
};

const loginUserFail = (dispatch, error) => {
    console.log(error);
    dispatch({ 
        type: LOGIN_USER_FAIL,
        payload: error
     });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const signInUserSuccess = (dispatch, username, user) => {
    const { currentUser } = firebase.auth();
    
    firebase.database().ref(`/users/${currentUser.uid}/data`)
        .push({ username, scores: 50, team: '', country: '' })
        .then(() => {
            dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user
        });
            Actions.main();
        });
};
