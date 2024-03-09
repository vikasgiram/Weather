import './App.css'
import SearchBox from './SearchBox'
import Info from './Info'
import { useState } from 'react';

function App() {
  let [info, setInfo]=useState('');

  let handleChange=(res)=>{
    setInfo(res);
    console.log(info);
  }

  return (
    <div className='main'>
      <SearchBox></SearchBox>
      <Info ></Info>
    </div>
  )
}

export default App
