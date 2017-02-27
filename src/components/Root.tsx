import * as React from 'react';
import { Provider, ProviderProps } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';

// import App from '../App';
import ContactPage from './ContactPage';

const Root: React.SFC<ProviderProps> = ({ store }) => (
    <Provider store={store}>
        <ContactPage />
    </Provider>
);

export default Root;