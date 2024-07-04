const PORT = 3000;
const URL_BASE = `http://localhost:${PORT}/`;
const API_USERS = URL_BASE + 'api/users';
const AUTH_API = URL_BASE + 'auth';

const AUTH_REGISTER = AUTH_API + '/register';
const AUTH_LOGIN = AUTH_API + '/login';

export const URLS = {
	API_USERS,
	AUTH_REGISTER,
	AUTH_LOGIN
};
