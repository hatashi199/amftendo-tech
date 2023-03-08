import { ButtonStyled } from './Styles';
interface Props {
	label: string;
}

const Button: React.FC<Props> = ({ label }: Props) => {
	return <ButtonStyled>{label}</ButtonStyled>;
};

export default Button;
