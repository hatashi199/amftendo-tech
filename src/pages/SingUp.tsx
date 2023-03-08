import HeaderTech from '../components/HeaderTech/HeaderTech';
import FooterTech from '../components/FooterTech/FooterTech';
import FormSignUp from '../components/FormSignUp/FormSignUp';

const SingUp: React.FC = () => {
	return (
		<>
			<HeaderTech label={`Registra un nuevo usuario`} />
			<FormSignUp />
			<FooterTech />
		</>
	);
};

export default SingUp;
