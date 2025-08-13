
import './App.css';
import NAVBAR from './components/NAVBAR';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NAVBAR title="Textutils" aboutText="About Textutils"/>
      <div className="container">
        <TextForm heading="Enter Text Below"/>
      </div>
    </>
  );
}
export default App;

