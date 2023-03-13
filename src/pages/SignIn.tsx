import FooterTech from '../components/FooterTech/FooterTech';
import FormSignIn from '../components/FormsTech/FormSignIn';
import HeaderTech from '../components/HeaderTech/HeaderTech';
import { HeaderTech__Labels } from '../const/const';

const SignIn: React.FC = () => {
	return (
		<>
			<HeaderTech title={HeaderTech__Labels.signIn} />
			<FormSignIn />
			<FooterTech />
		</>
	);
};

export default SignIn;
