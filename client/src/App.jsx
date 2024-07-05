import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import AuthProvider from './providers/AuthProvider';

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<GlobalStyles />
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
