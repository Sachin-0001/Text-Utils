import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#49535c';
      document.body.style.color = '#ffffff';
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      showAlert("Light mode has been enabled","success");
    }
  }
  const showAlert = (message,type) => {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container mx-6">
          <Textform heading="Enter text to analyse" mode={mode} showAlert={showAlert} />
        
      </div>
     </>
  );
}

export default App;
