import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QrCode() {

    const [qrCode,setQrCode] = useState('');
    const [input,setInput] = useState('')

    const handleGenerateQrCode = () => {
        setQrCode(input);
        setInput('')
    }
  return (
    <div>
      <input  onChange = {(e) => setInput(e.target.value)} value={input}
      type="text" placeholder='Enter Value Here...' />
      <button disabled = {input && input.trim() !== ''? false : true} onClick={handleGenerateQrCode}>Generate</button>
      <div>
        <QRCode value={qrCode} size={400} bgColor='white'/>
      </div>
    </div>
  )
}
