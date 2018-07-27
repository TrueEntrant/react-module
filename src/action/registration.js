export const FORM_SUBMIT = '[Registration Form] Send';

export class Actions {
    static registration(text) {
        return {
            type: FORM_SUBMIT,
            formText: text,
        }
    }
}


