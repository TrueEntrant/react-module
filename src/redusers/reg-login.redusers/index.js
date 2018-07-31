import * as registration from '../../action/registration';
import * as login from '../../action/login.action';
import dataBase from '../../data/db.json'


const initialState = {
    ...dataBase,
    match: true,
    current: ''
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case registration.FORM_SUBMIT: {

            const newUsers = state.users;
            newUsers.push(action.payload);

            return {
                ...state,
                users : newUsers
            }
        }
        case login.LOGIN_SUBMIT: {
            const res = action.payload
            return {
                ...state,
                match: res         
            }
        }
        case login.LOGIN_APROVED: {
            const res = action.payload
            return {
                ...state,
                current: res         
            }
        }
        default: return state;
    }
}

