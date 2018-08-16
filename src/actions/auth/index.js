export const AUTHORISATION_REQUEST = 'AUTHORISATION_REQUEST';
export const AUTHORISATION_REQUEST_SUCCESS = 'AUTHORISATION_REQUEST_SUCCESS';
export const AUTHORISATION_REQUEST_FAILED = 'AUTHORISATION_REQUEST_FAILED';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export function loginStart(data) {
    return {
        type: AUTHORISATION_REQUEST
    };
}

export function loginSuccess(data) {
    return {
        type: AUTHORISATION_REQUEST_SUCCESS,
        data
    };
}

export function loginFailed(id) {
    return {
        type: AUTHORISATION_REQUEST_FAILED
    };
}

export function logout() {
    return {
        type: LOGOUT_REQUEST
    };
}
