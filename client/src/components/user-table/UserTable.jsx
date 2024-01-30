import { IconContext } from 'react-icons';
import { FaEye, FaPencil, FaRegTrashCan } from 'react-icons/fa6';
import { StyledRow, StyledTable } from './styles';

const UserTable = ({ users }) => {
	return (
		<StyledTable>
			<tbody>
				{users.map(user => {
					return (
						<StyledRow key={user.userId}>
							<td>
								<img src='client/public/assets/images/profile.png' alt='' />
							</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>
								<IconContext.Provider value={{ color: 'green' }}>
									<span>
										<FaEye />
									</span>
								</IconContext.Provider>
								<IconContext.Provider value={{ color: 'blue' }}>
									<span>
										<FaPencil />
									</span>
								</IconContext.Provider>
								<IconContext.Provider value={{ color: 'red' }}>
									<span>
										<FaRegTrashCan />
									</span>
								</IconContext.Provider>
							</td>
						</StyledRow>
					);
				})}
			</tbody>
		</StyledTable>
	);
};

export default UserTable;
