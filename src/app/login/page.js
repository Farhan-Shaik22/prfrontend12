'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Footer from "../components/Footer";

export default function LoginForm() {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const axiosInstance = axios.create({
    baseURL: 'https://backend-production-0d68.up.railway.app', 
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/login', {
        rollNumber,
        password,
      });

      localStorage.setItem('token', response.data.token);
      window.location.href = '/clubs';
    } catch (error) {
      alert("Invalid Credentials")
      // console.error(error.response.data);
    }
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-black">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-center text-5xl font-extrabold font-pixel" color="white">
          Log In
        </Typography>
        <Typography className="animate-pulse mt-5 text-center text-3xl font-bold font-pixel text-gray-400">
          Key to Nexus Day-1
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Hallticket Number
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your hallticket number"
              className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Enter your password"
              className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Log in
          </Button>
        </form>
      </Card>
    </div>
    <Footer/>
    </>
  );
}
