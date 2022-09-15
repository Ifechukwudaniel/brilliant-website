/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
  const router = useRouter();
  return (
    <div className="mt-24 bg-green-700 px-20 py-20 lg:px-5 lg:py-10  ">
      <div className="flex flex-row lg:flex-col space-x-10 lg:space-x-0 lg:space-y-10 ">
        <img
          className="h-full"
          src={`${router.basePath}/assets/images/cbt.png`}
          alt="image4"
        />
        <div className="">
          <h1 className="text-5xl lg:text-3xl font-extrabold text-white">
            Mission Statement
          </h1>
          <p className=" text-lg lg:text-xs text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
}
