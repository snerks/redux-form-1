import * as React from 'react';
import { Dispatch } from 'redux';
import { Field, reduxForm, FormProps, FormErrors } from 'redux-form';
import * as classNames from 'classnames';

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

const renderInput = (field: any) => {
    const hasError = !!field.meta.error && !!field.meta.touched;

    let classNameArray = ['form-group', { 'has-error': hasError }];
    const classNamesResult = classNames(classNameArray);

    return (
        <div className={classNamesResult}>
            <label className="col-sm-2 control-label" htmlFor="firstName">{field.placeholder}</label>
            <div className="col-sm-10">
                <input {...field.input} type={field.type} placeholder={field.placeholder} className="form-control" />
                {hasError && <span className="help-block">{field.meta.error}</span>}
            </div>
        </div>
    );
};

class ContactForm extends React.Component<ContactFormProps, {}> {
    render() {
        const { handleSubmit, onSubmit } = this.props;

        return (
            /*
            "handleSubmit"" is supplied by redux-form
            It will invoke the container-supplied "onSubmit" method prop
            */
            <div className="container">
                <form className="form-horizontal" onSubmit={handleSubmit!(onSubmit)}>
                    <Field name="firstName" component={renderInput} placeholder="First Name" type="text" />
                    <Field name="lastName" component={renderInput} placeholder="Last Name" type="text" />
                    <Field name="email" component={renderInput} placeholder="Email" type="email" />

                    <button className="btn btn-default" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (values: ContactFormData, props: ContactFormProps): FormErrors<ContactFormData> => {
    const { firstName, lastName, email } = values;

    const errors: FormErrors<ContactFormData> = {};

    if (!firstName) {
        errors.firstName = 'Required';
    }

    if (!lastName) {
        errors.lastName = 'Required';
    }

    if (!email) {
        errors.email = 'Required';
    }

    return errors;
};

export default reduxForm({
    form: 'contact',  // a unique identifier for this form,
    validate
})(ContactForm);
