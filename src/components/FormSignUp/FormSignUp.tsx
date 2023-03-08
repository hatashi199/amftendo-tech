import Button from '../Button/Button';
import Input from '../Input/Input';
import { FormWrapper } from './Styles';
const FormSignUp: React.FC = () => {
	return (
		<FormWrapper>
			<h3>Introduce tus datos para crear una cuenta</h3>
			<form>
				<Input label='Nombre de Usuario' type='text' placeholder='Nombre de Usuario' />
				<Input label='Email' type='text' placeholder='Email' />
				<Input label='Contraseña' type='password' placeholder='Contraseña' />
				<Button label='Aceptar' />
			</form>
		</FormWrapper>
	);
};

export default FormSignUp;
