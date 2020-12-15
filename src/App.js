import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import MyForm from './MyForm';
import MyList from './MyList';
function App() {
  const colors = ['red', 'blue', 'green']
  const colors2 = [...colors]
  console.log('colors2=' + colors2)
  console.log("App called")
  const commentRef = useRef();
  const [comments, setcomments] = useState([]) //const comments=[];function setComments()
  useEffect(() => {//called when comment is updated

    console.log("useEffect:" + comments);
  }, [comments])
  function handleClick() {
    setcomments([...comments, commentRef.current.value])
    //console.log('handleClick:' + comments);
  }
  return (
    <div className="App">
      <MyForm handleClick={handleClick} commentRef={commentRef} />
      <MyList comments={comments} />
    </div>
  );
}

export default App;
