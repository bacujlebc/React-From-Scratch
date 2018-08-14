import {
    AUTHORISATION_REQUEST,
    AUTHORISATION_REQUEST_SUCCESS,
    AUTHORISATION_REQUEST_FAILED,
    LOGOUT_REQUEST
} from "../../actions/auth";

const auth = (state = {}, action) => {
    switch (action.type) {
        case AUTHORISATION_REQUEST:
            return state;
        case AUTHORISATION_REQUEST_SUCCESS:
            return {
                ...state,
                ...action.data
            };
        case AUTHORISATION_REQUEST_FAILED:
            return state;
        case LOGOUT_REQUEST:
            return {};

        default:
            return state;
    }
};

export default auth;
