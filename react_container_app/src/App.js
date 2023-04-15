import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';



function App() {
  const [data, setData] = useState("from FE")
  useEffect(() => {
    const data = axios.get("http://172.17.0.1:8000/students/")
    data.then((res)=>{
      console.log("res",res)
      setData(res?.data?.msg)
    })
    data.catch((err)=>{
      // setData(err)
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>{data || "Error"}</h3>
      </header>
    </div>
  );
}

export default App;
