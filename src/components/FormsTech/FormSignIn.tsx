import Input from '../Input/Input';
import Button from '../Button/Button';
import { FormWrapper } from './Styles';

const FormSignIn: React.FC = () => {
	return (
		<FormWrapper>
			<h3>Introduce tus datos para iniciar sesión</h3>
			<form>
				<Input label='Email' type='text' placeholder='Email' />
				<Input label='Contraseña' type='password' placeholder='Contraseña' />
				<Button label='Aceptar' />
			</form>
		</FormWrapper>
	);
};

export default FormSignIn;
