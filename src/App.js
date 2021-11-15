import React, { useState } from 'react';
import About from "./components/About";
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
 } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const setAlertFunction = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      setAlertFunction("Dark mode has been enabled", "success")
      // dynamically change the title 
      // setInterval(() => {
      //   document.title = "TextUtils - DarkMode"
      // }, 2500);
      // setInterval(() => {
      //   document.title = "Install TextUtils"
      // }, 1500);
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setAlertFunction("Normal mode has been enabled", "success")
    }
  }

  return (
    <Router>
      {/* <Navbar title="TextUtils" about="AboutMe" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      </div>
      <Routes>
        <Route path='/' element={<TextForm heading="Text Analyzer" mode={mode} setAlertFunction={setAlertFunction}/>}>
          
        </Route>
        <Route path='/about' element={<About mode={mode}/>}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
