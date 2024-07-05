import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContexts';

const Menu = () => {
	const { userData, loading } = useContext(AuthContext);

	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				{!userData && !loading && (
					<>
						<li>
							<Link to='/register'>Register</Link>
						</li>
						<li>
							<Link to='/login'>Login</Link>
						</li>
					</>
				)}
				{userData && !loading && (
					<>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Menu;
