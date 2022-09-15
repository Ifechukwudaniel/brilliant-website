import React from 'react';

import Map from './Map';

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div className="mt-24">
      <div className="mt-12 mb-10 flex w-screen">
        <div className="flex w-1/4  " />
        <div className="ml-3 w-2/4">
          <h1 className="text-center text-5xl font-extrabold text-green-700 ">
            Contact Us
          </h1>
        </div>
        <div className="flex w-1/4 justify-center"></div>
      </div>
      <div className=" flex flex-row">
        <Map />
        <div>
          <div>
            <h1>Address </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
          <div>
            <h1>Phone Number </h1>
            <p>0813-445-445</p>
            <p>0813-445-445</p>
          </div>
          <div>
            <h1>Email</h1>
            <p>Impact@gmailcom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
