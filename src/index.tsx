import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AmftendoApp from './AmftendoApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<AmftendoApp />
	</React.StrictMode>
);
