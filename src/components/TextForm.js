// shorthand command for function based component of react -> rfc

// import useState hook from react for state
import React, {useState} from 'react'


export default function TextForm(props) {

    // 1. created function to chnage txt in uppercase ---> so we can change text without reloading the page
    const convertUpper = ()=>{
        // console.log("convertUpper is clicked..." + text);

        // using toUpperCase() fun to change text into upper case
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("Converted in Upper Case", "Success");
    }

    // this function is creatd beacuse error is given in console related to textarea
    // so basically this fun will called when we will typing in textare but we cann't type anything beacuse we have given value is text [ textvalue(text) ] in textarea
    // so for typing in textarea we will pass event as parameter & add setText(event.target.value); this line in this fun
    const handleOnChange = (event)=>{
        // console.log("on change..");
        setText(event.target.value);
        
    }

    // 2. created function to chnage txt in lowercase --->
    const convertLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);

        props.showAlert("Converted in Lower Case", "Success");
    }

    // 3. fun to clear the text --------->
    const clearText = ()=>{
        let newText = "";
        setText(newText);

        props.showAlert("Cleared all text", "Success");
    }

    // 4. fun to copy the text --------->
    const copyText = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);  

        props.showAlert("Text Copied", "Success");
    }

    // 5. function to speak the text ------>
    const speakText = () => {
        let msg = new SpeechSynthesisUtterance(text);
        const tg = document.getElementById("toggle");
        if ((tg.textContent === "Speak Text")) {
          window.speechSynthesis.speak(msg);
          tg.textContent = "Stop Speak";

          props.showAlert("Sarted Speak", "Success");

        } 
        else {
          tg.textContent = "Speak Text";
          window.speechSynthesis.cancel();

          props.showAlert("Stopped Speak", "Success");

        }
    }

    // 6. capital first letter ---------->
    const capitalFirstLetter = () =>{
        function capitalize(str) {
          return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        const upper = text.split(' ').map(capitalize).join(' ');
        setText(upper)

        props.showAlert("Converted first letter in capital", "Success");
    }

    // 7. Remove extra spaces
    const removeExtraSpace = () =>{
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "));

         props.showAlert("Removed extra spaces", "Success");
    }

    
    // declare a new state variable after importing newState hook[ const [text, setText] this is the array destructuing syntax]
    const [text, setText] = useState("");  // deafult value of setText is inside useState
    // update the text inside the setText("") function. we can not update normally like setText = "updated text". we have to use setText() function to update the text in React
   // setText();  // now the text will be updated of setText() from text inside the useState("") 
    


    //  CSS for buttons 
   let myStyle={
        boxShadow: '3px 3px 4px #919191'
   }

   return ( 

    <>

    {/* dark mode button ------------> */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `} style={{color:'black', marginLeft: '89%', textShadow: '1px 1px 3px #071947'}}>
            <input onClick={props.changeTheme} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  style={{color:'black'}}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
    </div>

    <div className='container my-2'>
  
        <h2 style={{ color: '#25a2f5'}} >{props.heading}</h2>

        {/* I have taken bootsrtap code for textarea --> */}
        <div className="mb-3">
            <textarea className="form-control my-4"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#edfdff':'#ebebed'}} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
        </div>

        <button className='btn btn-primary mx-2' onClick={convertUpper} style={myStyle}>Convert to UpperCase</button>

        <button className='btn btn-primary mx-2' onClick={convertLower} style={myStyle}>Convert to LowerCase</button>

        <button className='btn btn-primary mx-2' onClick={clearText} style={myStyle}>Clear all Text</button>

        <button className='btn btn-primary mx-2' onClick={copyText} id="myBox" style={myStyle}>Copy all Text</button>

        <button type="submit" className='btn btn-primary mx-2'  id="toggle" onClick={speakText} style={myStyle}>Speak Text</button>

        <button className='btn btn-primary mx-2' onClick={capitalFirstLetter} style={myStyle}>Capital First Letter</button>

        <button className='btn btn-primary mx-2' onClick={removeExtraSpace} id="removeSpace" style={myStyle}>Remove Extra Space</button>

      
    </div>

    {/* Word & character Counter -> to counts the words & characters in the entered text */}
    <div className="container my-4" >
        <h4>Your text Summary</h4> 
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words & {text.replace(/\s+/g, '').length} characters</p>
        
        {/* text.split(" ").length ->  to counts the words with spaces & text.length -> to counts the characters with spaces*/}
        {/* text.trim() === '' ? 0 : text.match(/\S+/g).length -> to counts the words without spaces & text.replace(/\s+/g, '').length -> to counts the characters without spaces*/}

    </div>



    </>
  )
}

// inside the textarea, the text is shown of inside useState()
// we use setText() to change text of useState()