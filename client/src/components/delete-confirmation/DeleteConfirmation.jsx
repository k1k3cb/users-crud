const DeleteConfirmation = ({ onConfirm }) => {
	return (
		<div>
			<p>¿Estás seguro de que deseas eliminar este usuario?</p>
			<button onClick={onConfirm}>Sí</button>
			<button onClick={onConfirm}>Cancelar</button>
		</div>
	);
};

export default DeleteConfirmation;
