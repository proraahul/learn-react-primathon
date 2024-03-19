import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getSinglePost } from '../../api/api-async-await';

const EditPost = () => {
    const [postData, setPostData] = useState(null);
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const params = useParams();

    const updatePostError = useSelector((state)=> state.post.updatePostError);

    const getData = async (postId) => {
        const data = getSinglePost(postId);
        const { title , userId, body, reactions, tags } = data;
        const formDefaultValues = {
            title,
            userId,
            body,
            reactions,
            tags,
        };
        setPostData(formDefaultValues);
    }

  return (
    <div>
        {postData}
    </div>
  )
}

export default EditPost