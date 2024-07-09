import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = () => {
        // console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlter("convert to uppercase","success")
    }
    const handleloclick = () => {
        // console.log("lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlter("convert to lowercase","success")
    }
    const handleclearclick = () => {
        console.log("clear button was clicked" + text);
        let newText = " ";
        setText(newText);
        props.showAlter("text to click","success")
    }
    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value);
     
    }
    const handlecopy = () => {
        // let text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlter("copy","success")

    }
    const handleextra = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlter("extra spae remove","success")
    }
    const [text, setText] = useState('');

    // text="hey risu";//this is wrong waay
    // setText("hy risy");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark'?'white' : '#2d206d' }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#2d206d' }} id="mybox" rows="8"></textarea>
                </div>
                <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>uppercase convert</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>lowercase convert</button>
                <button   disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>clear</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>copy</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleextra}>remove extra space</button>
            </div>
            <div className="container  my-3" style={{ color: props.mode === 'dark' ? 'white' : '#2d206d' }}>
                <h1>your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>

                <h2>preview</h2>
                <p>{text.length>0?text:"enter the something"}</p>
                <h2>count space</h2>
                <p>{text.split(" ").length - 1}</p>
            </div>
        </>
    );
}