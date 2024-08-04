"use client";


import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Button } from "@material-tailwind/react";
import Footer from '../components/Footer';

export default function QRCodeGenerator() {
  const [rollNumber, setRollNumber] = useState('');
  const [qrCodeUrl, setQRCodeUrl] = useState('');
  const [error, setError] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await axios.post('backend-production-0d68.up.railway.app/api/generateQR', {
        rollNumber: rollNumber,
        year: new Date().getFullYear() 
      });
      setQRCodeUrl(response.data.qrCodeUrl);
      setError('');
    } catch (error) {
      console.error('Error generating QR code:', error);
      setError('Error generating QR code');
      setQRCodeUrl('');
    }
  };

  const downloadQRCode = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        placeholder="Enter your roll number"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
      />
     <Button
     onClick={generateQRCode}
  size='lg'
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
>
  Generate QR Code
</Button>
{qrCodeUrl && (
  <div className="mt-4 flex flex-col items-center">
    <p className="text-lg font-bold">QR Code:</p>
    <img src={qrCodeUrl} alt="QR Code" className="mt-2 w-[50vh] h-[50vh]" />
    <button
      onClick={downloadQRCode}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-9 focus:outline-none focus:shadow-outline"
    >
      Download QR Code
    </button>
  </div>
)}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
    <Footer/>
    </>
  );
}
