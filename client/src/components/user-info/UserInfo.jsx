import { URLS } from '../../constants/urls';
import { deleteData } from '../../utils/api';
import {
	StyledIcon,
	StyledIcons,
	StyledUserCard,
	StyledUserImg,
	StyledUserInfo
} from './styles';

const UserInfo = ({ users, setUsers,  setUserToEdit }) => {
	// console.log('users desde infoUser', users);
	// const [confirmDelete, setConfirmDelete] = useState(false);
	return (
		<div>
			{users.map(user => (
				<StyledUserCard key={user.userId}>
					<StyledUserInfo>
						<StyledUserImg
							src={user.userImage || '/public/assets/images/profile.png'}
							alt=''
						/>
						<div>
							<p>{user.name}</p>
							<p>{user.email}</p>
						</div>
					</StyledUserInfo>
					<StyledIcons>
						<i>
							<StyledIcon src='/public/assets/icons/eye_icon.svg' alt='' />
						</i>
						<i>
							<StyledIcon
								src='/public/assets/icons/edit_icon.svg'
								alt=''
								onClick={() => setUserToEdit(user)}
							/>
						</i>
						<i>
							<StyledIcon
								src='/public/assets/icons/delete_icon.svg'
								alt=''
								onClick={() => deleteUser(user.UserId, setUsers)}
								// onClick={() => handleDeleteClick()}
							/>
						</i>
					</StyledIcons>
				</StyledUserCard>
			))}
		</div>
	);
};

// const handleDeleteClick = setConfirmDelete => {
// 	setConfirmDelete(true);
// };

const deleteUser = async (id, setUsers) => {
	try {
		const usersUpdated = await deleteData(`${URLS.API_USERS}/${id}`);
		setUsers(usersUpdated);
	} catch (error) {
		console.log('error al eliminar el usuario', error);
	}
};

export default UserInfo;
