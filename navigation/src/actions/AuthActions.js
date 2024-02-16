import {
    EMAIL_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED
} from "./types"
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";

import { Actions } from "react-native-router-flux";

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })


        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(user => loginuserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                createUserWithEmailAndPassword(auth, email, password)
                    .then(() => loginuserSuccess(dispatch, user))
                    .catch((error) => {
                        console.log(error);
                        loginUserFail(dispatch)
                    })
            })
    }
}

const loginuserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user })

    Actions.main()

}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })

}