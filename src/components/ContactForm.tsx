import * as React from 'react';
import { Dispatch } from 'redux';
import { Field, reduxForm, FormProps, FormErrors } from 'redux-form';

export interface ContactFormData {
    firstName?: string;
    lastName?: string;
    email?: string;
}

export interface ContactFormProps extends FormProps<ContactFormData, {}, {}> {
    dispatch?: Dispatch<{}>;

    // SubmitHandler<FormData extends DataShape, P, S>
    // tslint:disable-next-line:max-line-length
    onSubmit: (values: ContactFormData, dispatch: Dispatch<{}>, props: ContactFormProps) => void | FormErrors<FormData> | Promise<any>;
}

class ContactForm extends React.Component<ContactFormProps, {}> {

    static validate(values: ContactFormData, props: ContactFormProps): any { // FormErrors<FormData> {
        return {
            firstName: 'A validation error has occurred'
        };
    }

    // save(values: ContactFormData, dispatch: Dispatch<{}>, props: ContactFormProps) {
    //     // tslint:disable-next-line:no-console
    //     console.log(values);
    // }

    render() {
        const { handleSubmit } = this.props;

        return (
            /*
            "handleSubmit"" is supplied by redux-form
            It will invoke the container-supplied "onSubmit" method prop
            */
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <button type="submit">Submit</button>
            </form>

        );
    }
}

export default reduxForm({
    form: 'contact',  // a unique identifier for this form,
    // validate: ContactForm.validate
})(ContactForm);
