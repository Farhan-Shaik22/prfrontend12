'use client';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import Cards from "../components/Cards";
  import Navbar from "../components/Navbar";
   
  export default function SimpleRegistrationForm() {
    return (
        <>
        <div className=" bg-black">
           
        <div className="flex justify-center items-center h-screen bg-black">
            
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" className=" text-center text-5xl font-extrabold font-pixel" color="white">
          Log In
        </Typography>
        <Typography  className=" animate-pulse mt-5 text-center text-3xl font-bold font-pixel text-gray-400">
            Key to Nexus Day-1
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
           
            <Typography variant="h6" color="white" className="-mb-3">
              Hallticket Number
            </Typography>
            <Input
              size="lg"
              placeholder="22BD1A1263"
              className=" text-white placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             
             
            <Typography variant="h6" color="white" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" text-white  placeholder-gray-600 !border-t-blue-gray-200 focus:!border-blue-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
         
          <Button className="mt-6" fullWidth>
            sign up
          </Button>
         
        </form>
      </Card>
     
      
      </div>
      </div>
      </>
    );
  }
