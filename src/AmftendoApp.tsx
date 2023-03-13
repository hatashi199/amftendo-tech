import { Route, Routes } from 'react-router-dom';
import { BackWrapper } from './components/General/BackWrapper';
import { app_routes } from './routes/routes';

const AmftendoApp: React.FC = () => {
	return (
		<BackWrapper>
			<Routes>
				{app_routes.map((route) => {
					return <Route key={route.label} path={route.path} element={<route.page />} />;
				})}
			</Routes>
		</BackWrapper>
	);
};

export default AmftendoApp;
