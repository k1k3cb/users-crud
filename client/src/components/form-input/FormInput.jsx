import { FORM_VALIDATIONS } from '../../constants/form-validations';
import { StyledDiv, StyledInput, StyledLabel, StyledSpanError } from './styles';

const FormInput = ({ name, text, type, placeholder, register, errors }) => {
	return (
		<StyledDiv>
			<StyledLabel htmlFor={name}>
				{text}
				<StyledInput
					type={type}
					id={name}
					name={name}
					placeholder={placeholder}
					{...register(name, FORM_VALIDATIONS.NAME)}
				/>
			</StyledLabel>
			<StyledSpanError>{errors?.[name]?.message}</StyledSpanError>
		</StyledDiv>
	);
};

export default FormInput;
