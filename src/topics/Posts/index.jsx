import { useState } from 'react';
import Header from '../components/Header';
import PostCard from './PostCard';

const Posts = () => {
    const post = useSelector((state)=> state.post.posts);
    const  dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostAction());
    }, [dispatch]);

  return (
    <>
        <Header />
        <div>
            <a href="/posts/create" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                + Create new post
            </a>
        </div>
        <section>
            {
                posts.map((post ,i)=> (
                    <PostCard key={i} data={post}/>
                ))
            }
        </section>
    </>
  )
}

export default Posts