import { useState } from 'react';
import { loginRequest } from '../../utils/auth/auth.api';

const Login = () => {
	const [userData, setUserData] = useState();
	console.log(userData);
	return (
		<form onSubmit={event => handleSubmit(event, setUserData)}>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' id='email' name='email' />
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input type='text' id='password' name='password' />
			</div>
			<input type='submit' value='Register User' />
		</form>
	);
};

const handleSubmit = async (event, setUserData) => {
	event.preventDefault();
	const { email, password } = event.target;
	const loginData = {
		email: email.value,
		password: password.value
	};
	const serverMessage = await loginRequest(loginData, setUserData);
	console.log(serverMessage);
};

export default Login;
