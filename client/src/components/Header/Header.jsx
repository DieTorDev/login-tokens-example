import { useContext } from 'react';
import Menu from '../Menu/Menu';
import { AuthContext } from '../../contexts/AuthContexts';
import Logout from '../Logout/Logout';

const Header = () => {
	const { userData, loading } = useContext(AuthContext);
	return (
		<header>
			<h1>HEADER</h1>
			<Menu />
			{!loading && !userData && <h1>No user</h1>}
			{!loading && userData && (
				<>
					{' '}
					<h1>Hola {userData.username.toUpperCase()}</h1>
					<Logout />
				</>
			)}
		</header>
	);
};

export default Header;
