import { EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_UPDATE } from "./types"
import { getAuth } from 'firebase/auth';
import { getDatabase, push, ref, onValue, set, remove } from "firebase/database";
import { Actions } from "react-native-router-flux";
export const employeeUpdate = ({ prop, value }) => {
    console.log('employee update', prop, value)
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    return (dispatch) => {
        const { currentUser } = getAuth();
        const reference = ref(getDatabase(), `/users/${currentUser.uid}/employees`);
        push(reference, { name, phone, shift }).then(() => {
            // Actions.employeeList({type: 'reset'});
            dispatch({ type: EMPLOYEE_CREATE })
            Actions.pop();
        })
    }
}

export const employeesFetch = () => {
    return (dispatch) => {
        const { currentUser } = getAuth();
        const reference = ref(getDatabase(), `/users/${currentUser.uid}/employees`);

        onValue(reference, (snapshot) => {
            dispatch({
                type: EMPLOYEE_FETCH_SUCCESS,
                payload: snapshot.val()
            })
        })
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    return (dispatch) => {
        const { currentUser } = getAuth();
        const reference = ref(getDatabase(), `/users/${currentUser.uid}/employees/${uid}`);
        set(reference, { name, phone, shift }).then(() => {
            console.log('save')
            // Actions.employeeList({type: 'reset'});
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
            Actions.pop();
        })
    }
}

export const employeeDelete = ({ uid }) => {
    return (dispatch) => {
        const { currentUser } = getAuth();
        console.log(`/users/${currentUser.uid}/${uid}`)
        const reference = ref(getDatabase(), `/users/${currentUser.uid}/employees/${uid}`);
        remove(reference)
            .then(() => {
                console.log('user removed')
                Actions.pop()
            })
    }
}