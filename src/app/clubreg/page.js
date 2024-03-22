"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function ClubTransaction() {
  const [club, setClub] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      const decodedToken = jwtDecode(storedToken);
      setRollNumber(decodedToken.rollNumber);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://backend-fypg.onrender.com/api/students/${rollNumber}`,
        { club, transactionId },
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
      <Typography variant="h4" className="text-center text-5xl font-extrabold font-pixel text-white">
        Add Your Transaction ID
      </Typography>
      <Typography className="animate-pulse mt-5 text-center text-3xl font-bold font-pixel text-gray-400">
          Last step to Nexus
        </Typography>
      <form onSubmit={handleSubmit} className="mt-8 space-y-8 ">
        <Input
          type="text"
          placeholder="Club"
          value={club}
          onChange={(e) => setClub(e.target.value)}
          className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700 h-14  "
        />
        <Typography variant="h6" color="white" className=" text-2xl">
              Transaction ID
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

