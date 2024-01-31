import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import Layout from '../layouts/Layout';
import UserDetails from '../pages/user-details/UserDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/userDetails' element={<UserDetails />} />
			</Route>
		</Routes>
	);
};

export default Router;
