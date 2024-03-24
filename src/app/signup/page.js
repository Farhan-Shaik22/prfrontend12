'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Select, Option } from '@material-tailwind/react'; // Import the Select component from your UI library
import Footer from "../components/Footer";


export default function SimpleRegistrationForm() {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [college, setCollege] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-fypg.onrender.com/api/register', {
        name,
        rollNumber,
        college,
        mobile,
        password,
      });
      window.alert("Successful Registration");
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
      // console.log(response.data);
    } catch (error) {
      // console.error(error.response.data);
      window.alert("Unsuccessful Registration");
    }
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-black">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-center text-5xl font-extrabold font-pixel" color="white">
          Sign Up
        </Typography>
        <Typography className=" animate-pulse mt-5 text-center text-3xl font-bold font-pixel text-gray-400">
          Register for NEXUS Day-1
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your name"
              className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Hallticket Number
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your roll number"
              className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />

            <div className="flex flex-col gap-6">
              <Typography variant="h6" color="white" className="-mb-3">
                College
              </Typography>
              <div className="w-72">
                <Select
                  label="Select College"
                  onChange={(selectedValue) => setCollege(selectedValue)}
                  value={college}
                >
                  <Option value="KMIT">KMIT</Option>
                  <Option value="NGIT">NGIT</Option>
                  <Option value="KMCE">KMCE</Option>
                  <Option value="KMEC">KMEC</Option>
                </Select>

              </div>
              <Typography variant="h6" color="white" className="-mb-3">
                Mobile Number
              </Typography>
            </div>

            <Input
              type="number"
              size="lg"
              placeholder="Enter your mobile number"
              maxLength={10}
              className="text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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
          <Button type="submit" className="mt-6 " fullWidth>
            Sign up
          </Button>
        </form>
      </Card>
    </div>
    <Footer/>
    </>
  );
}
