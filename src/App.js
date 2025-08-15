import './App.css';
import Alert from './components/Alert';
import NAVBAR from './components/NAVBAR';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // Show alert
  const showAlert = (message, type) => { 
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  // Toggle dark/light mode
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "wheat";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <NAVBAR title="Textutils" aboutText="About Textutils" mode={Mode} togglemode={toggleMode} />
      <Alert alert={alert} />

      {/* Choose which component to display here */}
      <TextForm heading="Enter Text Below" mode={Mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
