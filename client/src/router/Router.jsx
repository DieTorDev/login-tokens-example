import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	);
};

export default Router;
