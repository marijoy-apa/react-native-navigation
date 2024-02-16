import { EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_UPDATE } from "./types"
import { getAuth } from 'firebase/auth';
import { getDatabase, push, ref, onValue } from "firebase/database";
import { Actions } from "react-native-router-flux";
export const employeeUpdate = ({ prop, value }) => {
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