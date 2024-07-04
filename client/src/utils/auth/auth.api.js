import { HEADERS } from '../../constants/headers';
import { URLS } from '../../constants/urls';

const registerUser = async user => {
	const response = await fetch(`http://localhost:3000/auth/register`, {
		method: 'POST',
		body: JSON.stringify(user),
		headers: HEADERS
	});
	const data = await response.json();
	console.log(data);
};
const loginRequest = async (user, setUserData) => {
	try {
		const response = await fetch(URLS.AUTH_LOGIN, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: HEADERS,
			credentials: 'include'
		});
		if (!response.ok) {
			throw new Error(`Error al realizar la solicitud: ${response.status}`);
		}
		const data = await response.json();
		setUserData(data);
	} catch (error) {
		console.error('Error en la solicitud de inicio de sesión:', error);
		throw error;
	}
};

export { registerUser, loginRequest };
