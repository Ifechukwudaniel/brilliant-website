import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className="mt-24 bg-green-700 p-20 lg:px-5 lg:py-10">
      <div className="flex flex-row space-x-10 lg:flex-col lg:space-x-0 lg:space-y-10 ">
        <img
          className="h-full"
          src={`${router.basePath}/assets/images/cbt.png`}
          alt="image4"
        />
        <div className="">
          <h1 className="text-5xl font-extrabold text-white lg:text-3xl">
            Mission Statement
          </h1>
          <p className=" text-lg text-gray-100 lg:text-xs">
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
