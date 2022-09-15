import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className="m-auto  flex lg:flex-col w-10/12 space-x-10 lg:space-x-0 lg:space-y-4">
      <div className="z-40 mt-10 w-1/3 lg:hidden">
        <h1 className="text-4xl font-extrabold  text-green-800">Facilities</h1>
        <p className="mt-1 text-lg text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div className="flex w-1/3 lg:w-full  flex-col justify-center">
        <img
          className=""
          src={`${router.basePath}/assets/images/cbt1.png`}
          alt="image4"
        />
      </div>
      <div className=" flex w-1/3 lg:w-full flex-col justify-center space-y-10">
        <div>
          <img
            className=""
            src={`${router.basePath}/assets/images/building1.png`}
            alt="image4"
          />
        </div>
        <div>
          <img
            className=""
            src={`${router.basePath}/assets/images/building2.png`}
            alt="image4"
          />
        </div>
      </div>
    </div>
  );
}
