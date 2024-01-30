import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { patchData } from '../../utils/api';
import { generateRandomImage } from '../../utils/random-image';
import FormInput from '../form-input/FormInput';
import { StyledForm, StyledImg } from './styles';
import { URLS } from '../../constants/urls';

const FormUpdateUser = ({ setUsers, userToEdit, setUserToEdit }) => {
	const [userImage, setUserImage] = useState('');
	const {
		handleSubmit,
		register,
		formState: { errors },
		getValues
	} = useForm();

	console.log('userToEdit formUpdate', userToEdit);

	return (
		<>
			<StyledForm
				onSubmit={handleSubmit(() =>
					formSubmit(getValues, setUsers, userImage, updateUser)
				)}
			>
				<FormInput
					registerName='NAME'
					name='name'
					text='User Name'
					type='text'
					placeholder='e.g. Jane Appleseed'
					register={register}
					errors={errors}
					defaultValue={userToEdit.name}
				/>
				<FormInput
					registerName='EMAIL'
					name='email'
					text='Email'
					type='email'
					placeholder='e.g. username@email.com '
					register={register}
					errors={errors}
					defaultValue={userToEdit.email}
				/>
				<div>
					<label>
						<input type='radio' value='men' {...register('gender')} />
						Hombre
					</label>
					<label>
						<input type='radio' value='women' {...register('gender')} />
						Mujer
					</label>
				</div>
				<div>
					<StyledImg
						src={userToEdit.userImage || '/public/assets/images/profile.png'}
						alt='imagen del usuario'
					/>

					<button
						onClick={() =>
							handleGenerateImage(getValues('gender'), setUserImage)
						}
					>
						Generar imagen del usuario
					</button>
				</div>
				<button type='submit'>Actualizar usuario</button>
			</StyledForm>
		</>
	);
};

const updateUser = async (getValues, setUsers, userImage) => {
	const { userId, name, email } = getValues();
	console.log('formData update user', {
		userId,
		name,
		email,
		userImage
	});
	const updatedUser = { name, email, userImage };
	try {
		const updatedUsers = await patchData(URLS.API_USERS, updatedUser);
		setUsers(updatedUsers);
		console.log('Usuario creado exitosamente');
	} catch (error) {
		console.error('Error al crear el usuario:', error);
	}
};

const formSubmit = (getValues, setUsers, userImage) => {
	updateUser(getValues, setUsers, userImage);
};

//* genero imagen aleatoria del usuario a partir de su género
const handleGenerateImage = (gender, setUserImage) => {
	const imageUrl = generateRandomImage(gender);
	setUserImage(imageUrl);
};

export default FormUpdateUser;
