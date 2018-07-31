export const FORM_SUBMIT = '[Registration Form] Send';

export class Actions {
    static newUserAdd(user) {
        return {
            type: FORM_SUBMIT,
            payload: user
        }
    }
}


