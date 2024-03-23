"use client"
import Image from 'next/image';
// Ensure you import necessary modules
import React from 'react';
import Footer from '../components/Footer'

// Use client if needed, but it's unclear from the provided code
// import client from 'your-client-path';

// Corrected Page component
export default function Page() {
  return (
    <>
      <section>
        <div className="bg-black text-white py-1">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-4">
            <Image src="/NexusLogo.png" alt="TechFest" className="w-[50vh] h-[50vh]"width={700} height={700} />

              <p className=" text-3xl md:text-base text-gray-50 mb-4">Explore your favorite events and register now to showcase your talent and win exciting prizes.</p>
              
            </div>
            <div className=" mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div className=''>
                  {/* <Image className="inline-block mt-28 w-64 h-80  xl:block" src="/fin1.png" alt="Image 1" />
                </div>
                <div>
                  <Image className="inline-block mt-24  w-64 h-80  md:mt-0 p-0 md:p-0" src="/Fin2.png" alt="Image 2" />
                </div>
                <div>
                  <Image className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" alt="Image 3" /> */}
                  <img src="/XYZ.gif" className='w-full h-[94%] ml-4' alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
