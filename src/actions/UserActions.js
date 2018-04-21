import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    USER_FETCH_SUCCESS,
    USER_UPDATE
} from './types';

export const userUpdate = ({ prop, value }) => {
    return {
        type: USER_UPDATE,
        payload: { prop, value }
    };
};

export const getUserInfo = () => {
   const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
        .on('value', snapshot => {
            console.log(snapshot.val())
            dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};
