import { LabelContainer } from './Styles';

interface Props {
	label: string;
	type: string;
	placeholder: string;
}

const Input: React.FC<Props> = ({ label, type, placeholder }: Props) => {
	return (
		<LabelContainer>
			<h5>{label}</h5>
			<input type={type} placeholder={placeholder} />
		</LabelContainer>
	);
};

export default Input;
