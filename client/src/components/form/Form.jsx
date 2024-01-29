import { useForm } from 'react-hook-form';
import FormInput from '../form-input/FormInput';

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
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
			<button type='submit'>Enviar</button>
		</form>
	);
};

const formSubmit = data => {
	console.log(data);
};

export default Form;
