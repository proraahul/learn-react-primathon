import { Formik } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const dispatch = useDisPatch();
    const navigator = useNavigate();

    const createPostError = useSelector((state) => state.post.createPostError);

    const validator = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        }
        if (!values.body) {
            errors.body = 'Required';
        }
        return errors;
    }

    useEffect(() => {

        if (createPostError) {
            // error handling toastify
        } else if (createPostError !== null) {
            navigator('/posts')
            // success handling toastify 
        }
    }, [createPostError, navigator]);


    const onSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        dispatch(createPostAction(values));
        setSubmitting(false);
    }

    const goBack = () => {
        navigator('/posts');
    }

    const checkAllAvaliabilityProperties = (formikProps) => {

        const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, resetForm } = formikProps;    


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="my-4">
                    Title:
                    <br />
                    <input type="text" name='title' autoComplete='off' onChange={handleChange} onBlur={handleBlur} value={values.title} className='px-2 py-1 border rounded border-green-500 w-full' />
                </label>
                {errors.title && touched.title && (
                    <span className="text-red-500 text-sm">{errors.title}</span>
                )}
            </div>

            <div className="mb-4">
                <label className="my-4">
                    User Id:
                    <br />
                    <input type="number" name='userId' autoComplete='off' onChange={handleChange} onBlur={handleBlur} value={values.userId} className='px-2 py-1 border rounded border-green-500 w-full' />
                </label>
                {errors.title && touched.title && (
                    <span className="text-red-500 text-sm">{errors.userId}</span>
                )}
            </div>

            <div className='flex gap-4 mt-8 justify-end'>
                <button type='reset'
                    onClick={resetForm}
                    className='flex-1 border py-2 rounded borer-green-500 text-green-500'
                >
                    Clear
                </button>
                <button type='submit'
                    disabled={isSubmitting}
                    className='flex-1 border py-2 rounded borer-green-500 text-white'
                >
                    Create post
                </button>

            </div>

        </form>
    )
}

return (
    <>
    <createHeader title='create new post' onBackClick={goBack} />
    <div className='h-screen bg-gray-200 pt-32'>
        <div className='w-96 border rounded-md overflow-hidden bg-white mx-auto'>
            <div className="m-4">
                <Formik
                initialValues={{title: "", userId: ""}}
                validate={validator}
                onSubmit={onSubmit}
                >
                    {checkAllAvaliabilityProperties}
                </Formik>
            </div>
        </div>
    </div>
    </>
)

}

export default CreatePost