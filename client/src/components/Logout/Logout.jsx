import Cookies from 'js-cookie';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
	const { setUserData } = useContext(AuthContext);

	const navigate = useNavigate();

	return <button onClick={() => logout(setUserData, navigate)}>Logout</button>;
};

const logout = (setUserData, navigate) => {
	Cookies.remove('token');
	setUserData(null);
	navigate('/');
};

export default Logout;
