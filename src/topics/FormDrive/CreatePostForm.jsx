import { useState } from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { createPost } from '../../api/api-async-await';


const defaultValues = {
    title: "",
    body: "",
    userId: 1,
};


const CreatePostForm = () => {
    const [posts, setPosts] = useState([]);

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

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await createPost(values);
            console.log({ response });
            setPosts((posts) => [...posts, response]);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setSubmitting(false);
        }
    }

    const getPostForm = ({ isSubmitting }) => {
        return (
            <Form className='max-w-96 mx-auto border rounded p-4 m-5'>
                <Field type="text" name="title" placeholder='Title of post' className="border rounded-md p-2 block w-full" />
                <ErrorMessage name="title" component="div" className='text-sm text-red-600 block w-full' />
                <Field type="text" as="textarea" name='body' rows='4' placeholder='body of posts' className='border rounded-md p-2 mt-4 block w-full' />
                <ErrorMessage name="body" component="div" className='text-sm text-red-600 block w-full' />
                <button type="submit" disabled={isSubmitting} className='mt-5 border rounded-md bg-green-600 ext-white p-2 disabled:opacity-0'>
                    Submit
                </button>
            </Form>
        )
    }


    return (
        <div>
            <Formik
                initialValues={defaultValues}
                validate={validator}
                onSubmit={onSubmit}
            >
                {getPostForm}
            </Formik>

            <div className="p-4 m-5">
                <h2>Posts</h2>
                <ul>
                    {
                        // posts.map(post => 
                        //     <li key={post.id}>{post.title}</li>
                        //     <li>{post.body}</li>
                        // )
                        }
                </ul>

            </div>

        </div>
    )
}

export default CreatePostForm