import {combineReducers} from "redux";
import * as regLogReduser from './reg-login.redusers'


export const rootReducer = combineReducers({
    usersData: regLogReduser.reducer
});