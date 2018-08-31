export const LOAD_FORM_DATA = 'LOAD_FORM_DATA';
export const CLEAR_FORM_DATA = 'CLEAR_FORM_DATA';

export function loadData(data) {
	return {
		type: LOAD_FORM_DATA,
		data
	};
}

export function clearData() {
	return {
		type: CLEAR_FORM_DATA
	};
}
