import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className="mt-28  flex w-screen">
      <div className="flex w-1/4 justify-center lg:hidden">
        <img
          className="relative top-10 h-72 w-fit"
          src={`${router.basePath}/assets/images/rocket.png`}
          alt="image4"
        />
      </div>
      <div className=" w-2/4 lg:w-3/4 sm:w-full sm:p-10">
        <h1 className="text-center text-6xl font-extrabold text-green-700 sm:text-2xl ">
          Life in Brilliant Impact
        </h1>
        <p className="mt-1 text-lg text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex w-1/4 justify-center opacity-30 lg:absolute">
        <img
          className="h-full"
          src={`${router.basePath}/assets/images/graduation.png`}
          alt="image4"
        />
      </div>
    </div>
  );
}
