import * as registration from '../../action/registration';
import * as login from '../../action/login.action';


const initialState = {
    users: [
        {
            name: 'Vasya',
            password: '123',
            id: 1,
            age: 18
        }
    ],
    match: true
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case registration.FORM_SUBMIT: {

            const newUsers = state.users[0];
            newUsers.name = action.payload;

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
        default: return state;
    }
}
