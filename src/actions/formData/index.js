export const LOAD_FORM_DATA = 'LOAD_FORM_DATA';

export function loadData(data) {
    return {
        type: LOAD_FORM_DATA,
        data
    };
}
