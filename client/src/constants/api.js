const BASE_URL = 'http://localhost:3000/';

const USERS = {
	ALL_USERS: {
		url: BASE_URL + 'api/users',
		method: 'GET'
	},
	CREATE_USER: {
		url: BASE_URL + 'api/users',
		method: 'POST'
	},
	UPDATE_USER: {
		url: BASE_URL + 'api/users',
		method: 'PATCH'
	},
	DELATE_USER: {
		url: BASE_URL + 'api/users',
		method: 'DELETE'
	}
};
export const URL = {
	USERS
};
