import React, { useState } from 'react';
import './App.css';
import Modal from './Components/modal/Modal';
import Posts from './Components/Posts';
import SideBar from './Components/SideBar';

let id = 0;

function App() {
  const [active, setActive] = useState(false);
  const [posts, setPosts] = useState([
    {title: "Очень важно", body: "Сделать дела по дому", postID: id += 1},
    {title: "Можно потом", body: "Вынести мусор", postID: id += 1},
    
  ])
  
  const addPost = (newPost) => {
     setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <div className="side_bar">
        <span className="title_task">Ваши задачи</span>
        <SideBar posts={posts}/>
      </div>
      <div className="planer">
        <h1>Ваши задачи</h1>
        <Posts posts={posts}/>
        <button className="modal_btn" onClick={() => setActive(true)}>+</button>
        <span>Создать пост</span>
      </div>
      <Modal active={active} setActive={setActive} create={addPost}/>
    </div>
  );
}

export default App;
//Make RAMP