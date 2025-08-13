import React,{useState} from 'react';

export default function TextForm(prop) {
  const handleUpClick = () => { 
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text,setText] = useState("Enter text here");

  return (
    <>
    <div className='container'>
        <h1>{prop.heading}</h1>
      <div className = "mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>

    <div className="container my-3">
     <h1>Your Text Summary</h1>
    </div>
    </>
  )
}
