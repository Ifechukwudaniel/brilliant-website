/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
  const router = useRouter();
  return (
    <div className="m-auto mt-12 flex w-10/12 space-x-10 lg:space-x-0 lg:space-y-4  lg:flex-col-reverse">
      <div className="z-40 mt-10 w-1/3  lg:w-full ">
        <h1 className="text-4xl font-extrabold  text-green-800">Staff</h1>
        <p className="mt-1 text-lg text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div className="flex w-1/3 flex-col justify-center lg:w-full">
        <img
          className=""
          src={`${router.basePath}/assets/images/principal.png`}
          alt="image4"
        />
        <p className="text-gray-900">Mr Daniel Ifechukwu</p>
        <p className="text-sm text-green-500">Founder</p>
      </div>
      <div className="flex w-1/3  flex-col   justify-center lg:w-full">
        <img
          className=""
          src={`${router.basePath}/assets/images/vicePrincipal.png`}
          alt="image4"
        />
        <p className="text-gray-900">Mr Daniel Ifechukwu</p>
        <p className="text-sm text-green-500">Founder</p>
      </div>
    </div>
  );
}
