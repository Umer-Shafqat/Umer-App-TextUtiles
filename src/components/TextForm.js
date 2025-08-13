import React,{useState} from 'react';

export default function TextForm(prop) {
  const handleUpClick = () => { 
    let newtext=text.toUpperCase();
    setText(newtext);
  }
   const handleLowClick = () => { 
    let newtext=text.toLowerCase();
    setText(newtext);
  }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
const handlefirstclick = () => {
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
};


const clear = () => {
    let newtext = "";
    setText(newtext);
}

  const [text,setText] = useState("");

  return (
    <>
    <div className='container'>
        <h1>{prop.heading}</h1>
      <div className = "mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handlefirstclick}>Convert to First Capital</button>
      <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
    </div>

    <div className="container my-3">
     <h2>Your Text Summary</h2>
     <p>{text.split(" ").length-1} words and {text.length} characters</p>
     <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  )
}
