 import React, { useState } from 'react'
 
 export default function About(props) {
//  const[mystyle,setmystyle]= useState({
//   color:'black',
//   backgroundColor:'white'
//  })

let mystyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
  
}

//  const[btntext,setbtntext]=useState("enable Dark mode")
//   let toggstyle=()=>{
//   if(mystyle.color==='black'){
//     setmystyle(
//       {
//         color:'white',
//         backgroundColor:'black',
//         border:'1px solid white'
//       }
//     )
//     setbtntext("Enable to light mode")
//   }
//   else{
//     setmystyle(
//       {
//         color:'black',
//         backgr;oundColor:'white'
//       }
//     )
//     setbtntext("Enable dark mode")
//   }
//  }
  return(
<div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h1>About us</h1>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>analyse your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      Textutils gives you a way to analyze your text quickly
      </div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <strong>free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
Textutils is a free character counter tools that provides instant character count and word count statistic for agiven that .Textutils reports the number of words and characters.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
   <strong>browser comptiable</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
       This word counter software work in any web browser such as chrome,firefox,internet,safari,opera.It suits to count character in facebook ,blog,books,excel documnet ,pdf document,essays etc.
      </div>
    </div>
  </div>
  {/* <div className="container my-3">
  <button onClick={toggstyle} type="button"  class="btn btn-primary">{btntext}</button>

  </div>
   */}
</div>
    
</div>
  )
}
