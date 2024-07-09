
import './App.css';
// let name="risu";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlter = (massage, type) => {
    setalert({
      msg: massage,
      type: type

    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
 const removebodyclasses=()=>{
document.body.classList.remove('bg-primary');
document.body.classList.remove('bg-danger');
document.body.classList.remove('bg-success');
document.body.classList.remove('bg-warning');
document.body.classList.remove('bg-light');
document.body.classList.remove('bg-dark');

 }
  const togglemode = (cls) => {
    removebodyclasses();
    document.body.classList.add('bg-'+cls);
    // console.log(cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2d206d';
      showAlter("dark mode has been enable", "success");
      // document.title = "Textutils- dark mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlter("light mode has been enable", "success");
      // document.title = "Textutils- light mode"
    }

  }
  return (
    <>
      {/*   <Navbar title="TextUtils" aboutText="About us"></Navbar> */}
      {/* <Navbar/> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode}></Navbar>
        <Alert alert={alert} ></Alert>
        <div className="container  my-3">
          <Switch>
            <Route exact path="/about"> 
              <About mode={mode} />
            </Route>
            <Route exact path="/"> 
              <TextForm showAlter={showAlter} heading="Textutils-word count,character count,remove extra spaces,lowercase to uppercase,uppercase to lowercase" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;
