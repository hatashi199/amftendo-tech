import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserHome from '../pages/UserHome';
import Home from '../pages/Home';

interface Route {
	label: string;
	path: string;
	page: React.FC;
}

export const app_routes: Route[] = [
	{
		label: 'Home',
		path: '/',
		page: Home
	},
	{
		label: 'User Home',
		path: '/user-home',
		page: UserHome
	},
	{
		label: 'Sign In',
		path: '/sign-in',
		page: SignIn
	},
	{
		label: 'Sign Up',
		path: '/sign-up',
		page: SignUp
	}
];
