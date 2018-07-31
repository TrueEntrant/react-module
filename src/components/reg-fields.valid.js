


export default function validation(state, result) {
    if(state.name !== '') {
        if(!state.name.match(/^[а-яА-ЯёЁa-zA-Z]+$/)) {
            if(state.textWarns[0] === null && state.fieldWarns[0] === null) {
                const fields = state.fieldWarns;
                fields[0] = 'bad-container';

                const text = state.textWarns;
                text[0] = 'validate'
                result(fields,text);
            }
        }
        else {
            if(state.textWarns[0] === 'validate' && state.fieldWarns[0] === 'bad-container') {
                const fields = state.fieldWarns;
                fields[0] = null;

                const text = state.textWarns;
                text[0] = null;
                result(fields,text);
            }
        }
    }  
    if(state.login !== '') { 
        if(!state.login.match(/^[a-zA-Z]+$/)) {
            if(state.textWarns[1] === null && state.fieldWarns[1] === null) {
                const fields = state.fieldWarns;
                fields[1] = 'bad-container';

                const text = state.textWarns;
                text[1] = 'validate'
                result(fields,text);
            }
        }
        else {
            if(state.textWarns[1] === 'validate' && state.fieldWarns[1] === 'bad-container') {
                const fields = state.fieldWarns;
                fields[1] = null;

                const text = state.textWarns;
                text[1] = null;
                result(fields,text);
            }
        }
    }
    if(state.lastname !== '') { 
        if(!state.lastname.match(/^[а-яА-ЯёЁa-zA-Z]+$/)) {
            if(state.textWarns[2] === null && state.fieldWarns[2] === null) {
                const fields = state.fieldWarns;
                fields[2] = 'bad-container';

                const text = state.textWarns;
                text[2] = 'validate'
                result(fields,text);
            }
        }
        else {
            if(state.textWarns[2] === 'validate' && state.fieldWarns[2] === 'bad-container') {
                const fields = state.fieldWarns;
                fields[2] = null;

                const text = state.textWarns;
                text[2] = null;
                result(fields,text);
            }
        }
    }
    if(state.password !== '') { 
        if(!state.password.match(/^[a-zA-Z0-9_]{6,18}$/)) {
            if(state.textWarns[5] === null && state.fieldWarns[5] === null) {
                const fields = state.fieldWarns;
                fields[5] = 'bad-container';

                const text = state.textWarns;
                text[5] = 'validate'
                result(fields,text);
            }
        }
        else {
            if(state.textWarns[5] === 'validate' && state.fieldWarns[5] === 'bad-container') {
                const fields = state.fieldWarns;
                fields[5] = null;

                const text = state.textWarns;
                text[5] = null;
                result(fields,text);
            }
        }
    }
    if(state.confPass !== '') { 
        if(!(state.confPass === state.password)) {
            if(state.textWarns[6] === null && state.fieldWarns[6] === null) {
                const fields = state.fieldWarns;
                fields[6] = 'bad-container';

                const text = state.textWarns;
                text[6] = 'validate'
                result(fields,text);
            }
        }
        else {
            if(state.textWarns[6] === 'validate' && state.fieldWarns[6] === 'bad-container') {
                const fields = state.fieldWarns;
                fields[6] = null;

                const text = state.textWarns;
                text[6] = null;
                result(fields,text);
            }
        }
    }
}