
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [click, setClick] = useState('')


  useEffect(() => {

        fetch('http://localhost:3001/details', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setClick(data.clicks);
      })

  }, [])

  function callAPI() {


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clicks: click })
    };
    fetch('http://localhost:3001/details', requestOptions)
      .then(res=>res.json())
      .then(data=>{
        // console.log(data.clicks);
        setClick(data.clicks);
      })

  }

  return (
    <div className="App">
      <button onClick={callAPI}>Make Call</button>
      <div className="clicks">{click}</div>
    </div>
  );
}

export default App;
