
import './App.css';
import NAVBAR from './components/NAVBAR';
import TextForm from './components/TextForm';
//import About from './components/About'; 
import React,{useState} from 'react';

function App() {
  const [Mode,setMode] = useState("light");
  
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark"); // dark background
    } else {
      setMode("light");
      
    }
  };
  return (
    <>
      <NAVBAR title="Textutils" aboutText="About Textutils" mode={Mode}  togglemode={toggleMode}/>
      {/* <About /> */}
      <div className="container">
        <TextForm heading="Enter Text Below"/>
  </div>
    </>
  );
}
export default App;

