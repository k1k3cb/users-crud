import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { v4 } from 'uuid';
import { URL } from '../../constants/api';
import { generateRandomImage } from '../../utils/random-image';
import FormInput from '../form-input/FormInput';
import { StyledForm } from './styles';
import { toastSuccess } from '../../utils/toastify';

const Form = () => {
	const [userImage, setUserImage] = useState();
	// const [showToast, setShowToast] = useState(false)
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	return (
		<>
			<StyledForm onSubmit={handleSubmit(formSubmit())}>
				<FormInput
					registerName='NAME'
					name='UserName'
					text='User Name'
					type='text'
					placeholder='e.g. Jane Appleseed'
					register={register}
					errors={errors}
				/>
				<FormInput
					registerName='EMAIL'
					name='UserEmail'
					text='EMAIL'
					type='email'
					placeholder='e.g. username@email.com '
					register={register}
					errors={errors}
				/>
				<div>
					<label>
						<input type='radio' value='male' {...register('gender')} />
						Hombre
					</label>
					<label>
						<input type='radio' value='female' {...register('gender')} />
						Mujer
					</label>
				</div>
				<div>
					{userImage ? (
						<img src={userImage} alt='imagen del usuario' />
					) : (
						<img src='client/public/assets/images/profile.png' alt='' />
					)}

					<button onClick={() => handleGenerateImage('male', setUserImage)}>
						Generar imagen del usuario
					</button>
				</div>
				<button type='submit'>Enviar</button>
			</StyledForm>
			{/* {showToast && <ToastContainer />} { Mostrar el ToastContainer cuando showToast es true } */}
		</>
	);
};

const formSubmit = async (formData, userImage,setShowToast) => {
	console.log('formData', formData);

	try {
		const response = await fetch(URL.USERS.CREATE_USER.url, {
			method: URL.USERS.CREATE_USER.method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: v4(),
				image: userImage,
				name: formData.UserName,
				email: formData.UserEmail
			})
		});

		if (response.ok) {
			console.log('Usuario creado exitosamente.');
			toastSuccess();
			setShowToast(true)
		} else {
			console.error('Error al crear el usuario.');
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};


//* genero imagen aleatoria del usuario a partir de su genero
const handleGenerateImage = (gender, setUserImage) => {
	const imageUrl = generateRandomImage(gender);
	setUserImage(imageUrl);
};

export default Form;
