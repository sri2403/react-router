import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h5>{post.name} {post.edu}</h5>
        </div>
    );
};

export default Post;