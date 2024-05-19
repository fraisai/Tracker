import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/styles.scss';

import App from './App.jsx';

const root = createRoot(document.getElementById('contents'));

root.render(
	// disabled strict mode for authentication/github oauth2
	// <React.StrictMode> 
		<BrowserRouter>
			<App />
		</BrowserRouter>
	// </React.StrictMode>,
);
