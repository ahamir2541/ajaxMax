import React from 'react';

const Post = ({post, clicked}) => {
    return (
        <div onClick={() => clicked(post.id) } className="bg-info p-1 my-2" >
            <h3> {post.title} </h3>
            <h6> {post.author} </h6>
        </div>
    );
};

export default Post;