import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';
import { generateRandomImage } from '../../utils/random-image';
import FormInput from '../form-input/FormInput';
import { StyledForm, StyledImg } from './styles';

const FormCreateUser = ({ setUsers }) => {
	const [userImage, setUserImage] = useState('');
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
		getValues
	} = useForm();

	return (
		<>
			<StyledForm
				onSubmit={handleSubmit(() =>
					formSubmit(getValues, setUsers, userImage, setUserImage, reset)
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
				/>
				<FormInput
					registerName='EMAIL'
					name='email'
					text='Email'
					type='email'
					placeholder='e.g. username@email.com '
					register={register}
					errors={errors}
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
						src={userImage || '/assets/images/profile.png'}
						alt='imagen del usuario'
					/>

					<button
						type='button'
						onClick={() =>
							handleGenerateImage(getValues('gender'), setUserImage)
						}
					>
						Generar imagen del usuario
					</button>
				</div>
				<button type='submit'>Enviar</button>
			</StyledForm>
		</>
	);
};

const createUser = async (getValues, setUsers, userImage) => {
	const { name, email } = getValues();
	console.log('formData create user', {
		name,
		email,
		userImage
	});
	const newUser = { name, email, userImage };
	try {
		const newUsers = await postData(URLS.API_USERS, newUser);
		setUsers(newUsers);
		console.log('Usuario creado exitosamente');
	} catch (error) {
		console.error('Error al crear el usuario:', error);
	}
};

//* genero imagen aleatoria del usuario a partir de su género
const handleGenerateImage = (gender, setUserImage) => {
	const imageUrl = generateRandomImage(gender);
	setUserImage(imageUrl);
};
const formSubmit = (getValues, setUsers, userImage, setUserImage, reset) => {
	createUser(getValues, setUsers, userImage);
	reset();
	setUserImage('/assets/images/profile.png');
};

export default FormCreateUser;
