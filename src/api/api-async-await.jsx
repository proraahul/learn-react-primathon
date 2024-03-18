// get posts
export const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',

        });
        return await response.json(); 
}

// create a post
export const createPost = async (post) => {
    // https://jsonplaceholder.typicode.com/posts
    const response = await fetch(`${API_URl}/posts`, {
        method: 'POST', 
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(post),
    });
    return await response.json();
}

// get a single post 
export const getSinglePost = async (id) => {
    // https://jsonplaceholder.typicode.com/posts/1
    const response = fetch(`${API_URL}/${id}`, {
        method: 'GET'
    });
    return await response.json();
}

// Update a post 
export const updatePost = async (id, post) => {
    // https://jsonplaceholder.typicode.com/posts/1
    const response = fetch(`${API_URL}/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        },
    });
    return await response.json();
}

// Delete a Post
export const deletePost = async (id) => {
   const res = await fetch (`${API_URL}/${id}`, {
    method:"DELETE",
});
if(!res.ok){throw new Error('Could not delete post')};
    
   return await res.json();
}
