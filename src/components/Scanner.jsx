import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from "html5-qrcode";
import "./Scanner.css"
const Scanner = () => {
    const [scannerResult, setScanResult] = useState(null);
    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
          qrbox: {
            width: 150,
            height: 150,
          },
          fps: 5,
        });
    
    
        function success(result) {
          scanner.clear();
          setScanResult(result);
        }
        
        function error(err) { 
          // console.log(err);
        }
    
        scanner.render(success, error);
    
        
      }, []);
/*
  useEffect(() => {
    if (scannerResult) {
      window.location.href = scannerResult;
    }
  }, [scannerResult]);
*/

  return (
    <div className='ScannerContainer'>
          {scannerResult ? (
        <div>
          Success: <a target="_blank" href={scannerResult}>{scannerResult}</a>
        </div>
      ) : (
        <div id="reader" className='roof'></div>
      )}
    </div>
  )
}

export default Scanner