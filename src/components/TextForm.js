import React,{useState} from 'react';

export default function TextForm(prop) {
  const handleUpClick = () => { 
    let newtext=text.toUpperCase();
    setText(newtext);
    prop.showAlert("Converted to Uppercase!", "success");
  }
   const handleLowClick = () => { 
    let newtext=text.toLowerCase();
    setText(newtext);
    prop.showAlert("Converted to Lowercase!", "success");
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

const handleextraspace = () => {
    let newtext = text.split(/[ ]+/).join(" ");
    setText(newtext);
    prop.showAlert("Removed extra spaces!", "success");
}
  return (
    <>
    <div className="container" style={{color:prop.mode === "dark" ? 'wheat' : 'grey'}}>
        <h1>{prop.heading}</h1>
      <div className = "mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background : prop.mode === "light" ? 'wheat' : 'grey'}} id="mybox" rows="8"></textarea>
      </div>
      <button style={{color:prop.mode === "dark" ? 'grey' : 'black'}} className="btn btn-light mx-2 " onClick={handleUpClick}>Convert to UpperCase</button>
      <button  style={{color:prop.mode === "dark" ? 'grey' : 'black'}} className="btn btn-light mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button style={{color:prop.mode === "dark" ? 'grey' : 'black'}} className="btn btn-light mx-2" onClick={handlefirstclick}>Convert to First Capital</button>
      <button style={{color:prop.mode === "dark" ? 'grey' : 'black'}} className="btn btn-light mx-2" onClick={handleextraspace}>Remove extra Spaces</button>
      <button style={{color:prop.mode === "dark" ? 'grey' : 'black'}} className="btn btn-light mx-2" onClick={clear}>Clear</button>
    </div>

    <div className="container my-3" style={{color:prop.mode === "dark" ? 'wheat' : 'grey'}}>
     <h2>Your Text Summary</h2>
     <p>{text.split(" ").length-1} words and {text.length} characters </p>
     <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
