const messages = {
	name: {
		required: 'El campo es obligatorio',
		wrong: 'El campo no es valido'
	},
	number: {
		required: 'El campo es obligatorio',
		wrong: 'El campo no es valido, solo se admiten números'
	},
	email: {
		required: 'El campo es obligatorio',
		wrong: 'El formato del email no es valido'
	}
};

const pattern = {
	onlyLetters: /[a-z]+$/,
	onlyNumbers: /^\d+$/,
	email: /^[a-zA-Z0-9_]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,6}$/
};

export const FORM_VALIDATIONS = {
	NAME: {
		required: messages.name.required,
		pattern: {
			value: pattern.onlyLetters,
			message: messages.name.wrong
		}
	},
	CARD_NUMBER: {
		required: messages.number.required,
		pattern: {
			value: pattern.onlyNumbers,
			message: messages.number.wrong
		}
	},
	EMAIL: {
		required: messages.email.required,
		pattern: {
			value: pattern.email,
			message: messages.email.wrong
		}
	}
};
