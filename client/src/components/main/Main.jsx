import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { URL } from '../../constants/api';
import Form from '../form/Form';
import UserTable from '../user-table/UserTable';
import { StyledContainer } from './styles';

const Main = () => {
	const [users, setUsers] = useState([
		{
			id: v4(),
			name: '',
			email: '',
			image: ''
		}
	]);

	useEffect(() => {
		fetchData(setUsers);
	}, []);

	return (
		<StyledContainer>
			<Form />
			<UserTable users={users} />
		</StyledContainer>
	);
};

const fetchData = async setUsers => {
	try {
		const response = await fetch(URL.USERS.ALL_USERS.url);
		const data = await response.json();
		console.log('data:', data);
		setUsers(data);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

export default Main;
