import * as React from 'react';
import { Provider, ProviderProps } from 'react-redux';

import ContactPage from './ContactPage';

const Root: React.SFC<ProviderProps> = ({ store }) => (
    <Provider store={store}>
        <ContactPage />
    </Provider>
);

export default Root;