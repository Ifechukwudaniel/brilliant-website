/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
  const router = useRouter();

  return (
    <div>
      <div className="mt-10 flex w-screen">
        <div className="flex w-1/4 justify-center opacity-30  lg:absolute ">
          <img
            className="h-44 "
            src={`${router.basePath}/assets/images/badge.png`}
          />
        </div>
        <div className="ml-3 w-2/4 lg:w-full sm:p-30 sm:p-10">
          <h1 className="text-center text-6xl font-extrabold text-green-700 sm:text-3xl ">
            Who We Are
          </h1>
          <p className="mt-1 text-lg text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex w-1/4 justify-center sm:hidden"></div>
      </div>
      <div className="mx-auto   mt-10 flex  h-4/5 w-10/12 flex-row lg:flex-col">
        <div className="w-1/2  lg:w-full">
          <img
            className="h-fit w-full"
            src={`${router.basePath}/assets/images/twoStudent.png`}
            alt="image4"
          />
        </div>
        <div className="mt-11 h-full w-1/2 lg:w-full">
          <div className="h-42  relative m-auto w-5/6 lg:w-full ">
            <div className="z-40">
              <h1 className="text-4xl font-extrabold  text-green-800">
                Mission Statement
              </h1>
              <p className="mt-1 text-lg text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className=" absolute top-0 left-0 z-0 h-20 w-20 bg-red-200" />
          </div>
          <div className="h-42  m-auto mt-10 w-5/6 lg:w-full">
            <div className="h-20 w-20 bg-green-200" />
            <h1 className="text-4xl font-extrabold  text-green-800">Vision</h1>
            <p className="mt-1 text-lg text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
