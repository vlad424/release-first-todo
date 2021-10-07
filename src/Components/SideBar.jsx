import React from 'react';

const SideBar = ({posts}) => {

    return (
        <ul className="list">
            {posts.map(post => (
                <span className="list__item">
                    {post.postID}. 
                    <h4>{post.title}</h4>
                </span>
            ))}
        </ul>
        
    );
};

export default SideBar;