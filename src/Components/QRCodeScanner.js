import React, { useState, useEffect } from 'react';
import  {QrReader}  from 'react-qr-reader';

function QRCodeScanner({ onScan }) {
   const [delay, setDelay] = useState(300);
   const [result, setResult] = useState(null);

   const handleScan = (data) => {
    if (data) {
       setResult(data);
    }
   };

   const handleError = (err) => {
     console.error(err);
   };

   useEffect(() => {
     const timer = setInterval(() => {
       setResult(null);
     }, delay);

     return () => {
       clearInterval(timer);
    };
   }, [delay]);

   useEffect(() => {
    if (result) {
        onScan(result);
    }
   }, [result, onScan]);

  return (
    <div>
      <QrReader delay={delay} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />      <p>{result}</p>
    </div>
   );
}

 export default QRCodeScanner;