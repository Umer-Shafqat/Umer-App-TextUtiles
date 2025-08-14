
import './App.css';
import Alert from './components/Alert';
import NAVBAR from './components/NAVBAR';
import TextForm from './components/TextForm';
//import About from './components/About'; 
import React,{useState} from 'react';


function App() {
  const [Mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => { 
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark"); // dark background
      document.body.style.backgroundColor = "grey"; // dark background
      document.body.style.color = "white"; // light text color
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "wheat"; // light background
      document.body.style.color = "black"; // dark text color
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <NAVBAR title="Textutils" aboutText="About Textutils" mode={Mode}  togglemode={toggleMode}/>
      <Alert alert={alert} />
      {/* <About /> */}
      <div className="container">
        <TextForm heading="Enter Text Below" mode={Mode} showAlert={showAlert} />
  </div>
    </>
  );
}
export default App;

