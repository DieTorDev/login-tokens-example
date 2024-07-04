import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<h1>REGISTER</h1>
			<Register />
			<h1>LOGIN</h1>
			<Login />
		</>
	);
};

export default App;
