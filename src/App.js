import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Title from './components/Title';
import Alert from './components/Alert';



function App() {

  // make state for change theme 
  const [mode, setMode] = useState('Light Mode'); // it tells whether dark mode is enabled or not

  // method to change theme (=> this is called arrow function)
  const changeTheme = ()=>{
    if(mode === 'Light Mode'){
      setMode('Dark Mode');
      document.body.style.backgroundColor = '#022d4a';
      document.body.style.color = 'white';

      // showAlert function call
      showAlert("Dark mode enabled", "Success");
    }
    else{
      setMode('Light Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      // showAlert function call
      showAlert("Light mode enabled", "Success");

    }
  }
  
  // state for alert (bydeafult is null)
  const [alert, setAlert] = useState(null);
  
  // method for alert
  const showAlert = (msg, type) =>{
    setAlert({
      msg: msg,
      type: type
    })

      // logic to remove alert after some time
      setTimeout(() => {
        setAlert(null);
      }, 1500);

  }


  return (
    <>
    
      {/* import Title for heading with props [props provides to use componet in another code. we can change our heading in this App.js file. we don't need to change in Title.js file] */}
      <Title heading = "Text Analyzer" />

      <div className="container my-5" >
     
        {/* make heading as a props [props basically used to make use component anywhere ] */}
        <TextForm showAlert={showAlert} mode={mode} changeTheme={changeTheme}  heading="Enter the Text to Analyze" />
      </div>

       {/* import alert using props ->  {alert} this is the state of const [alert, setAlert] = useState(null); this */}
       <Alert alert = {alert} />

</>


  );
}

export default App;
