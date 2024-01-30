import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccess = toast.success('🦄 Usuario creado!', {
	position: 'bottom-left',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
	transition: Bounce
});
