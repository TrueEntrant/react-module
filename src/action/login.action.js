export const LOGIN_SUBMIT = '[Login] compare result change';
export const LOGIN_APROVED = '[Login] current user set';


export class Actions {
    static compareResChange(res) {
        return {
            type: LOGIN_SUBMIT,
            payload: res
        }
    }

    static currentUserSet(user) {
        return {
            type: LOGIN_APROVED,
            payload: user
        }
    }
}