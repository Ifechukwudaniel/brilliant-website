/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react';

import GallerySlider from './GallerySlider';

export default function index() {
  const router = useRouter();
  return (
    <>
      <div className="mt-16 flex w-screen flex-row ">
        <div className="m-auto flex w-10/12 justify-between lg:flex-col">
          <div className=" w-1/3 py-10 pl-5  lg:mb-6 lg:w-3/4 lg:py-0 lg:pl-0 sm:w-full">
            <h1 className=" text-6xl font-extrabold text-green-700 sm:text-2xl ">
              Gallery
            </h1>
            <p className="mt-1 text-lg text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-2/3 lg:w-full ">
            <img
              className="ml-44 h-full lg:ml-0"
              src={`${router.basePath}/assets/images/graduationStudent.png`}
              alt="image4"
            />
          </div>
        </div>
      </div>
      <GallerySlider />
    </>
  );
}
