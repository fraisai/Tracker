import React from 'react';
import { createRoot, hydrateRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/styles.scss';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

// root.render(
// 	// disabled strict mode for authentication/github oauth2
// 	// <React.StrictMode> 
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	// </React.StrictMode>,
// );
// hydrateRoot(document.getElementById('root'), <App />);


hydrateRoot(
	rootElement,
	<StrictMode>
	  <App />
	</StrictMode>
  );
  