import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here........");

  //   setText("helo");
  const handleUpperClick = () => {
    console.log("Upper was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    console.log("Lower was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Text is changed");
    // setText("")
    setText(event.target.value);
  };
  const handleTextClick = () => {
    if (text === "Enter text here........"){
      setText("");
    }
  };
  const handleClearText = ()=> {
    setText("")
  }
  const handleCopy = () => {
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.setAlertFunction("Copied Successfully", "success")
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const countWord = () => {
    var count = 0
    const words = text.split(" ")
    for (let index = 0; index < words.length; index++) {
      if (words[index].length !== 0) {
        count ++;
      }
    }
    return count
  }
  

  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}}
          value={text}
          onChange={handleOnChange}
          onClick={handleTextClick}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
        Correct Extra Space
      </button>
     
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{countWord()} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter the text to preview'}</p>
    </div>
    </>
  );
}
