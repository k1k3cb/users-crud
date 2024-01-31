import { Link, useLocation } from 'react-router-dom';

const UserDetails = () => {
	const { state: user } = useLocation();

	console.log(user)

	return (
		<div>
			<Link to='/'>
				<button>Back</button>
			</Link>
			<div>
				<img
					src={user.userImage || '/public/assets/images/profile.png'}
					alt=''
				/>
				<p>{user.name}</p>
				<p>{user.email}</p>
			</div>
		</div>
	);
};

export default UserDetails;
