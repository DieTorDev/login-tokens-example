import { useContext, useEffect } from 'react';
import { loginRequest } from '../utils/auth/auth.api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContexts';

const Login = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!userData) return;
		navigate('/');
	}, [userData]);

	if (loading) return <h1>Loading...</h1>;

	return (
		<>
			<h1>LOGIN</h1>
			<button onClick={() => navigate('/')}> Go Back </button>
			<form onSubmit={event => handleSubmit(event, setUserData)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' id='email' name='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' id='password' name='password' />
				</div>
				<input type='submit' value='Login User' />
			</form>
		</>
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
