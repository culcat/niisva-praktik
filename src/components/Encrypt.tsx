import React from 'react';
import CryptoJS from "crypto-js"
import {useState} from "react";
function Encrypt() {
    const [text,setText]=useState('')
    const [encryptedText,setEncryptedText] = useState('')
    const encrypt = () => {
        const encrypted = CryptoJS.AES.encrypt(text,'secret key')
        setEncryptedText(encrypted.toString())
    }

    return (
        <>
            <input  onChange={(e) => setText(e.target.value)} />
            <button onClick={encrypt}>Encrypt</button>
            <p>{encryptedText}</p>


        </>
    );
}

export default Encrypt;
