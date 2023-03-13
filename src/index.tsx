import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AmftendoApp from './AmftendoApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AmftendoApp />
		</BrowserRouter>
	</React.StrictMode>
);
