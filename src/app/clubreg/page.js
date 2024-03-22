"use client"; // <-- This line seems incorrect, did you mean "use strict"?

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // <-- Change to 'jwt-decode'
import Image from 'next/image';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import duction from "../intro";

export default function ClubTransaction() {
  const [club, setClub] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [token, setToken] = useState('');
  
  const [id, setId] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const idFromSearchParams = searchParams.get('id');
    setId(idFromSearchParams);
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      const decodedToken = jwtDecode(storedToken); // <-- Change to jwtDecode
      setRollNumber(decodedToken.rollNumber);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://backend-fypg.onrender.com/api/students/${rollNumber}`,
        { club: duction.all.find(profile => profile.id === id)?.name, transactionId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Transaction submitted:', response.data);
    } catch (error) {
      console.error('Error submitting transaction:', error.response.data);
    }
  };

  return (
    <Card color="transparent" shadow={false} className="p-8 bg-black">
      {rollNumber ? (
        <div>
          <div className='flex justify-end mt-8'>
            <div className='w-[40%]'>
              <Typography className="animate-pulse mt-5 text-center text-5xl font-extrabold font-pixel text-gray-400">
                Last step to Nexus
              </Typography>
              {duction.all
                .filter(profile => profile.id === id)
                .map((profile, index) => (
                  <Typography key={index} variant="h6" color="white" className=" text-2xl text-center mt-8 ml-4">
                    {profile.name}
                  </Typography>
                ))
              }
              <Image
                src="/qrreff.png" // Route of the image file
                height={350} // Desired size in pixels
                width={350} // Desired size in pixels
                className='mt-5 ml-[20%]'
                alt="Your Image"
              />
              <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                <Typography variant="h6" color="white" className="text-2xl">
                  Add your Transaction ID
                </Typography>
                <Input
                  type="text"
                  placeholder="Transaction ID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700 h-14"
                />
                <Button type="submit" fullWidth className="bg-green-300 text-white font-bold text-2xl font-pixel h-14">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Typography className="text-center text-2xl font-bold font-pixel text-white">
          Please log in to add a club.
        </Typography>
      )}
    </Card>
  );
}
