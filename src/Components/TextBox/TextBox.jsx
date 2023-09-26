import React from 'react'
import './Styles.css'

const TextBox = () => {
    return (
        <div id='parent'>
            <div id='txt-box'>
                <div id='inp-box'>
                    <label htmlFor="">Enter Your Text Here</label>
                    <textarea cols="50" rows="10" id='txt-area'></textarea>
                </div>
                <div id='out-box'>
                    <label htmlFor="output-area">Output</label>
                    <div id='output-area'></div>
                </div>
            </div>
            <div id='btn'>
                <button>Summarise</button>
            </div>
        </div>
    )
}

export default TextBox

