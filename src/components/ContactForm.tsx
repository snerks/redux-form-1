import * as React from 'react';
import { Dispatch } from 'redux';
import { Field, reduxForm, FormProps /*, FormErrors */ } from 'redux-form';

// export interface ContactFormProps {
//     firstName?: string;
//     lastName?: string;
//     email?: string;

//     // tslint:disable-next-line:no-any
//     handleSubmit?: any;
// }

export interface ContactFormData {
    firstName?: string;
    lastName?: string;
    email?: string;
}

export interface ContactFormProps extends FormProps<ContactFormData, {}, {}> {
    dispatch?: Dispatch<{}>;
    onSubmit: any; // SubmitHandler<FormData extends DataShape, P, S>
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
            /*<form onSubmit={handleSubmit(this.save.bind(this))}>
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
            </form>*/
            /*<form onSubmit={handleSubmit!(this.save)}>
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
            </form>*/

            /*
            "handleSubmit"" is supplied by redux-form
            It will invoke the container-supplied "onSubmit" method
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

// Decorate the form component
// const ContactForm = reduxForm({
//     form: 'contact' // a unique name for this form
// })(ContactFormCore);

// export default ContactForm;

export default reduxForm({
    form: 'contact',  // a unique identifier for this form,
    // validate: ContactForm.validate
})(ContactForm);
