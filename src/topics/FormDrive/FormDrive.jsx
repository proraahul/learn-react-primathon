import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" className="border-2 border-blue-500 rounded-md p-2 m-2 block" />
                    <ErrorMessage name="email" component="div" className='text-sm text-red-600 block mx-2' />
                    <Field type="password" name="password" className="border-2 border-blue-500 rounded-md p-2 m-2 block" />
                    <ErrorMessage name="password" component="div" className='text-sm text-red-600 block mx-2' />
                    <button type="submit" disabled={isSubmitting} className='border p-2 border-red-500'>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Basic;