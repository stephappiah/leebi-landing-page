import MailchimpFormContainer from "./MailchimpFormContainer";
// import RocketImage from '../img/rocket.jpg'
import React from "react";

export default function Social() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id='waitlist'>
        <div className="max-w-md w-full space-y-8">
          <div>
            <p className='text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Get on board.</p>
            <p className="text-center text-xl mt-4 text-gray-900">
              Be a part of our journey as we build from the ground up!
            </p>
            <p className="mt-5 text-center text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Early access. Seed investing. Project updates.
            </p>
          </div>
        
          <MailchimpFormContainer />
          
        </div>
      </div>
    </>
  );
}
