import * as React from 'react';
import { Dispatch } from 'redux';

import ContactForm, { ContactFormData, ContactFormProps } from './ContactForm';

export interface ContactPageProps {
}

class ContactPage extends React.Component<ContactPageProps, {}> {

    // redux-form
    // SubmitHandler<FormData extends DataShape, P, S>
    save(values: ContactFormData, dispatch: Dispatch<{}>, props: ContactFormProps) {
        // tslint:disable-next-line:no-console
        console.log(values);
    }

    render() {
        return (
            <ContactForm onSubmit={this.save} />
        );
    }
}

export default ContactPage;
