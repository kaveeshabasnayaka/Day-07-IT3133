import './App.css';
import ChildComp from './ChildComp';
import { useState } from 'react';


function App() {
  const [Childname,setChildname]=useState("Default");

  const receiveName = (name) =>{
    setChildname(name);
  }

  return (
    <div>
      <h2>Hello React I'm parent</h2>
      <ChildComp setfun={receiveName}/>
      <p>My Child said:{Childname}</p>
    </div>
  );
}

export default App;
