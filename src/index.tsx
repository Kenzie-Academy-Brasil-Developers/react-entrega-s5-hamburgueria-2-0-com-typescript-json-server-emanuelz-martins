import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Contexts } from './context';

ReactDOM.render(
    <React.StrictMode>
        <Contexts>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Contexts>
    </React.StrictMode>,
    document.getElementById('root'),
);
