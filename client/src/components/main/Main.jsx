import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';

import UserInfo from '../user-info/UserInfo';
import { StyledContainer } from './styles';
import FormCreateUser from '../form-create-user/FormCreateUser';

const Main = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	if (users.length === 0) <h1>LOADING...</h1>

	return (
		<StyledContainer>
			<FormCreateUser setUsers={setUsers} />
			<UserInfo users={users} setUsers={setUsers} />
		</StyledContainer>
	);
};

const getAllUsers = async setUsers => {
	try {
		const allUsers = await getData(URLS.API_USERS);
		setUsers(allUsers);
	} catch (err) {
		console.error('Error fetching data:', err);
	}
};

export default Main;
