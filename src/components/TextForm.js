import React,{useState} from "react";
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUPCLick = () => {
      setText(text.toUpperCase())
      props.showAlert("Converted to UpperCase","Success")
    }
    const handleLOCLick = () => {
      setText(text.toLowerCase())
      props.showAlert("Converted to LowerCase","Success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
  
    const handleCopy = () => {
       var text = document.getElementById("exampleFormControlTextarea1");
       navigator.clipboard.writeText(text.value);
      alert("Text copied to clipboard");
      
   }
  
    const handleRemSpaces = () => {
    let newtext = text.split(/[  ]+/);
      setText(newtext.join(" "));
      props.showAlert("Removed extra spaces","Success")
    }

  
    const handleClear = () => {
      setText("");
      props.showAlert("Clearred content","Success")
    }

  // const [myStyle, setmyStyle] = useState({
  //   backgroundColor: 'white',
  //   color: 'black'
  // })

  // const [btn, setbtn] = useState("Enable Dark Mode")
  // const toggleStyle = () => {
  //   setmyStyle((myStyle) => {
  //     if (myStyle.color === 'black') {
  //       setbtn("Enable light mode");
  //       return {
  //         backgroundColor: '#212529',
  //         color: 'white'
        
  //       };
        

  //     } else {
  //       setbtn("Enable Dark mode");
  //       return {
  //         backgroundColor: 'white',
  //         color: 'black'
  //       };
      
  //     }
  //   });
  // }


  

  return (
    <div className="container my-3" >
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
                  <h1> {props.heading}</h1>
        </label>
              <textarea className="form-control border-5" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#687d90'}}></textarea>
          </div>
          <button type="button" className="btn btn-primary mx-2" onClick={handleUPCLick}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLOCLick}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleRemSpaces}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear Content</button>
        
          <div className="container my-4">
              <h1>Text Summary</h1>
              <p>{(text.split(" ").length)-1} words , {text.length} characters</p>
              <p>{0.008*text.split(" ").length} mins read</p>
          </div>
      <br></br>
      {/* <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleStyle}
            />
        <label className="form-check-label mx-3" for="flexSwitchCheckDefault" >
              {btn}
            </label>
          </div> */}
    </div >
  );
}
