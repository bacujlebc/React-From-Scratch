import { LOAD_FORM_DATA, CLEAR_FORM_DATA } from '../../actions/formData';

const formData = (state = [], action) => {
  switch (action.type) {
    case LOAD_FORM_DATA:
      // debugger;
      return {
        ...state,
        ...action.data
      };
    // return Object.assign([], state, action.data);

    case CLEAR_FORM_DATA:
      return [];

    default:
      return state;
  }
};

export default formData;
