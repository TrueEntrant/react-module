export const LOGIN_SUBMIT = '[Login] compare result change';

export class Actions {
    static compareResChange(res) {
        return {
            type: LOGIN_SUBMIT,
            payload: res
        }
    }
}