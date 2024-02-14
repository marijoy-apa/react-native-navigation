import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./types"
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password).then(user => console.log(user));

    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}