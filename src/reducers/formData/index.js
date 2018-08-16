import { LOAD_FORM_DATA } from '../../actions/formData';

const formData = (state = {}, action) => {
    switch (action.type) {
        case LOAD_FORM_DATA:
            return {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
};

export default formData;
