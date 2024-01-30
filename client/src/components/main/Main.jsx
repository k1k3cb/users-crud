import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';

import FormCreateUser from '../form-create-user/FormCreateUser';
import FormUpdateUser from '../form-update-user/FormUpdateUser';
import UserInfo from '../user-info/UserInfo';
import { StyledContainer } from './styles';

const Main = () => {
	const [users, setUsers] = useState([]);
	const [userToEdit, setUserToEdit] = useState({});

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	if (users.length === 0) <h1>LOADING...</h1>;

	return (
		<StyledContainer>
			<div>
				<FormCreateUser setUsers={setUsers} />
				<br />
				{userToEdit && (
					<FormUpdateUser
						setUsers={setUsers}
						userToEdit={userToEdit}
						setUserToEdit={setUserToEdit}
					/>
				)}
			</div>
			<UserInfo
				users={users}
				setUsers={setUsers}
				setUserToEdit={setUserToEdit}
			/>
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
