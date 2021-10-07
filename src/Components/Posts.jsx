import React from 'react';

const Posts = ({posts}) => {
    return (
        <ul className="posts">
            {posts.map(post => (
                <li className="post">
                    <h2>{post.title}</h2>
                    <span>{post.body}</span>
                </li>
            ))}
        </ul>
    );
};

export default Posts;