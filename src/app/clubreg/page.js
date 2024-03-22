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
      <Typography variant="h4" className="text-center text-5xl font-extrabold font-pixel text-white">
        Add Club & Transaction ID
      </Typography>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          type="text"
          placeholder="Club"
          value={club}
          onChange={(e) => setClub(e.target.value)}
          className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
        />
        <Input
          type="text"
          placeholder="Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
        />
        <Button type="submit" fullWidth className="bg-green-300 text-white font-bold font-pixel">
          Submit
        </Button>
      </form>
    </div>
  ) : (
    <Typography className="text-center text-2xl font-bold font-pixel text-white">
      Please log in to add a club.
    </Typography>
  )}
</Card>
  );
}

