"use client";

import React, { useState , useEffect} from "react";
import Link from 'next/link';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter  
} from "@material-tailwind/react";
import { jwtDecode } from 'jwt-decode';

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [rollNumber, setRollNumber] = useState('');
  const [token, setToken] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      const decodedToken = jwtDecode(storedToken);
      setRollNumber(decodedToken.rollNumber);
    }
  }, []);

  const handleToggleNav = () => {
    setOpenNav(!openNav);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setOpenModal(false);
    window.location.href = '/login';
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/home" className="flex items-center text-white">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/clubs" className="flex items-center text-white">
          Activities
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/downloadqr" className="flex items-center text-white">
          Download QR
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full mx-auto">
      <style jsx>{`
        .navbar-container {
          overflow-x: hidden;
        }
      `}</style>
      <Navbar className="sticky top-0 z-10 border-black bg-transparent max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 navbar-container">
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer text-2xl font-pixel py-1.5 font-medium"
          >
            Public Relations
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {token ? (
                <>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block text-white"
                    onClick={() => setOpenModal(true)}>
                    <span> {rollNumber}</span>
                  </Button>
              </>
              ) : (
                <>
                  <Link href="/login">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block text-white">
                    <span> Log In</span>
                  </Button>
                </Link>
              </>
              )}
              <Link href="/signup">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                  disabled={!(token === '')}
                >
                  <span> Register </span>
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={handleToggleNav}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="flex flex-col lg:hidden">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="" >
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span> Register </span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
      <Dialog open={openModal} handler={setOpenModal}>
        <DialogHeader>Logout</DialogHeader>
        <DialogBody divider>
          Are you sure you want to logout?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleLogout}
            className="mr-1"
          >
            <span>Logout</span>
          </Button>
          <Button
            variant="gradient"
            onClick={() => setOpenModal(false)}
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
