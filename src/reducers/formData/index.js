import { LOAD_FORM_DATA } from "../../actions/formData";

export const formData = (state = {}, action) => {
    switch (action.type) {
        case LOAD_FORM_DATA:
            debugger;
            return {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
};
