import React from 'react';
import CryptoJS from "crypto-js"
import {useState} from "react";
function Decrypt() {
    const [text,setText]=useState('')
    const [decryptedText,setDecryptedText]=useState('')
    const decrypt = () => {
        const decrypted = CryptoJS.AES.decrypt(text,'secret key')
        const plainText =decrypted.toString(CryptoJS.enc.Utf8)
        setDecryptedText(plainText.toString())

    }
    return (
        <>

            <input  onChange={(e) => setText(e.target.value)} />
            <button onClick={decrypt}>Decrypt</button>
            <p>{decryptedText}</p>
        </>
    );
}

export default Decrypt;
