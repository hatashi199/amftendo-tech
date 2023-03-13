import HeaderTech from '../components/HeaderTech/HeaderTech';
import FooterTech from '../components/FooterTech/FooterTech';
import FormSignUp from '../components/FormsTech/FormSignUp';
import { HeaderTech__Labels } from '../const/const';

const SignUp: React.FC = () => {
	return (
		<>
			<HeaderTech title={HeaderTech__Labels.signUp} hourBatteryBar />
			<FormSignUp />
			<FooterTech />
		</>
	);
};

export default SignUp;
