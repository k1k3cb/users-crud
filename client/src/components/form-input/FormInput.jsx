import { FORM_VALIDATIONS } from '../../constants/form-validations';
import { StyledDiv, StyledInput, StyledLabel, StyledSpanError } from './styles';

const FormInput = ({
	registerName,
	name,
	text,
	type,
	placeholder,
	register,
	errors,
	defaultValue
}) => {
	return (
		<StyledDiv>
			<StyledLabel htmlFor={name}>
				{text}
				<StyledInput
					type={type}
					id={name}
					name={name}
					placeholder={placeholder}
					{...register(name, FORM_VALIDATIONS[registerName])}
					defaultValue={defaultValue}
				/>
			</StyledLabel>
			<StyledSpanError>{errors?.[name]?.message}</StyledSpanError>
		</StyledDiv>
	);
};

export default FormInput;
