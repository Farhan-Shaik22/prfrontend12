'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [number, setNumber] = useState(null);
  const [pictureLoaded, setPictureLoaded] = useState(false);

  useEffect(() => {
    fetchNumber();
  }, []);

  const fetchNumber = async () => {
    try {
      const response = await fetch('/api/number');
      const data = await response.json();
      setNumber(data.number);
    } catch (error) {
      console.error('Error fetching number:', error);
    }
  };

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(number, 10, 50);

      // Convert canvas to data URL and initiate download
      const downloadLink = document.createElement('a');
      downloadLink.href = canvas.toDataURL('image/jpeg');
      downloadLink.download = 'modified_picture.jpg';
      downloadLink.click();
    };

    img.src = '/picture.jpg';
  };

  return (
    <div>
      <h1>Number on Picture</h1>
      {number && <h2>Number: {number}</h2>}
      {pictureLoaded ? (
        <button onClick={handleDownload}>Download Picture</button>
      ) : (
        <p>Loading...</p>
      )}
      <img
        src="/picture.jpg"
        alt="Original Picture"
        onLoad={() => setPictureLoaded(true)}
        style={{ display: 'none' }}
      />
    </div>
  );
}
