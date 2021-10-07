import React, { useState } from 'react';
import './modal.css'

const Modal = ({active, setActive, create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = () => {
        const newPost = {
            ...post
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div className={active ? "modal_menu active" : "modal_menu"} onClick={() => setActive(false) }>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div className="inputs">
                    <input className="inp_modal"
                        type="text"
                        value={post.title} 
                        onChange={e => setPost({...post, title: e.target.value})}
                    />
                    <input className="inp_modal"
                        type="text" 
                        value={post.body}
                        onChange={e => setPost({...post, body: e.target.value})}
                    />
                </div>
                <div className="btn">
                    <button className="addNew_post" onClick={addNewPost}>+</button>
                    <span>Создать пост</span>
                </div>
            </div>
        </div>
    );
};

export default Modal;