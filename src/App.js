
import './App.css';
import NAVBAR from './components/NAVBAR';
import TextForm from './components/TextForm';
//import About from './components/About'; 

function App() {
  return (
    <>
      <NAVBAR title="Textutils" aboutText="About Textutils"/>
      {/* <About /> */}
      { <div className="container">
        <TextForm heading="Enter Text Below"/>
  </div>}
    </>
  );
}
export default App;

