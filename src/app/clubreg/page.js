"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import duction from "../intro";
import Footer from "../components/Footer";

export default function ClubTransaction() {
  const [club, setClub] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [token, setToken] = useState('');
  const [id, setId] = useState(null);
  const [registrationCount, setRegistrationCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false); // New state to track registration status
  const [inputDisabled, setInputDisabled] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const idFromSearchParams = searchParams.get('id');
    setId(idFromSearchParams);
  }, []);

  const clubs = [
    "Vachan 1",
    "Vachan 2",
    "Vachan 3",
    "Vachan 4",
    "Aalap 1",
    "Aalap 2",
    "Mudra 1",
    "Mudra 2",
    "Mudra 3",
    "Mudra 4",
    "Aakarshan",
    "Riti",
    "Recurse 1",
    "Recurse 2",
    "Traces Of Lenses",
    "Kaivalya",
    "Abhinaya",
    "E-Sports 1",
    "E-Sports 2",
    "E-Sports 3",
    "abunpaid1",
    "abunpaid2",
    "aakunpaid1",
    "aakunpaid2",
    "kaiunpaid",
    "ocunpaid1",
    "ocunpaid2",
    "ocunpaid3",
    "ocunpaid4",
    "ocunpaid5",
    "ocunpaid6",
    "ocunpaid7",
    "ocunpaid8",

  ]
  ;
  const caps =[50, 50, 50,50,100, 75, 100,50,75, 75, 1000, 24, 1000, 1000, 1000, 1000, 1000, 32, 32, 32 ,0,0,0,0,0]

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      const decodedToken = jwtDecode(storedToken);
      setRollNumber(decodedToken.rollNumber);
    }
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`https://backend-fypg.onrender.com/api/clubRegistrationCount/${duction.all.find(profile => profile.id === id)?.name}`)
        .then(response => {
          if (response.data.success) {
            setRegistrationCount(response.data.count);
            setInputDisabled(response.data.count >= caps[clubs.indexOf(duction.all.find(profile => profile.id === id)?.name)]);
          } else {
            console.error('Error getting club registration count:', response.data.message);
            setInputDisabled(true);
          }
        })
        .catch(error => {
          console.error('Error getting club registration count:', error);
          setInputDisabled(true);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id && rollNumber) {
      axios.get(`https://backend-fypg.onrender.com/api/clubs/${rollNumber}`)
        .then(response => {// Log response data
          if (response.data.success) {
            const { clubs } = response.data; // Extract clubs array from response.data
            
            // Check if clubs array is defined and includes the club with the specified ID
            if (clubs && clubs.includes(duction.all.find(profile => profile.id === id)?.name)) {
              setIsRegistered(true);
            }
          }
        })
        .catch(error => {
          console.error('Error checking registration status:', error);
        });
    }
  }, [id, rollNumber]);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(transactionId.length===12){
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
      // console.log('Transaction submitted:', response.data);
      // Show success message
      alert('Transaction submitted successfully!');
      // Redirect back to clubs page after 2 seconds
      setTimeout(() => {
        window.location.href = 'https://linktr.ee/Public_relations'; // Assuming the route to clubs page is '/clubs'
      }, 2000);
    } catch (error) {
      console.error('Error submitting transaction:');
      // Show error message if submission fails
      alert('Error submitting transaction.'+ error.response.data.message);
    }
  }
  else{
    alert("Enter valid Transaction ID");
  }
  };
  

  return (
    <>
    <Card color="transparent" shadow={false} className="p-8 bg-black">
    {rollNumber ? (
      <div>
        <div className='flex justify-end mt-8'>
          <img src="/pac1.gif" className='w-[40%] h-[40%] mr-40' alt="" />
          <div className='w-[40%]'>
            <Typography className="animate-pulse mt-5 text-center text-5xl font-extrabold font-pixel text-gray-400">
              Last step to Nexus
            </Typography>
            {duction.all
              .filter(profile => profile.id === id)
              .map((profile, index) => (
                <Typography key={index} variant="h6" color="white" className=" text-2xl text-center mt-8 ml-4">
                  {profile.tit}
                </Typography>
              ))
            }
            {isRegistered ? (
              <Typography variant="h6" color="white" className="text-2xl text-center mt-8 ml-4">
                Already Registered
              </Typography>
            ) : registrationCount >= caps[clubs.indexOf(duction.all.find(profile => profile.id === id)?.name)] || inputDisabled ? (
              <Typography variant="h6" color="white" className="text-2xl text-center mt-8 ml-4">
                Registrations Closed
              </Typography>
            ) : (
              <Image
                src={duction.all.find(profile => profile.id === id)?.qr}
                height={350}
                width={350}
                className='mt-5 ml-[20%]'
                alt="Your Image"
              />
            )}
            {!isRegistered && (
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
                  disabled={inputDisabled || isRegistered} 
                  maxLength={12} // Add maxLength attribute to limit input length to 12 characters
                />
                <Button type="submit" fullWidth className="bg-green-300 text-white font-bold text-2xl font-pixel h-14" disabled={inputDisabled || isRegistered}>
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    ) : (
      <Typography className="text-center text-2xl font-bold font-pixel text-white">
        Please log in to add a club.
      </Typography>
    )}

    </Card>
    <Footer/>
    </>
  );
}
