import React, { useState } from 'react'
import './Styles.css'
import axios from 'axios';

const TextBox = () => {

    const [formData, setFormData] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = formData

        axios.post('http://127.0.0.1:5000/api/send', data)
          .then(response => {
            console.log('Data sent successfully:', response.data);
          })
          .catch(error => {
            console.error('Error sending data:', error);
          });
        console.log("DATA :", formData)
    };

    const handleChange = (e) => {
        setFormData(e.target.value)
        console.log(formData)
    }

    return (
        <div id='parent'>
            <div id='txt-box'>
                <form id='inp-box' onSubmit={handleSubmit}>
                    <label htmlFor="">Enter Your Text Here</label>
                    <textarea cols="50" rows="10" id='txt-area' onChange={handleChange}></textarea>
                    <div id='btn'>
                        <button type='submit'>Summarise</button>
                    </div>
                </form>
                <div id='out-box'>
                    <label htmlFor="output-area">Output</label>
                    <div id='output-area'>
                        <div id='content'>{ formData}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TextBox



