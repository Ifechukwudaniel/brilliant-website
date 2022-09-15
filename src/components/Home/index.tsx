/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function index() {
  const router = useRouter();

  return (
    <section>
      <div className="flex flex-col  bg-green-700">
        <div
          className="m-auto  justify-center bg-cover text-white"
          style={{ backgroundImage: "url('/assets/images/background.png')" }}
        >
          <div className="z-10 m-auto  mt-20 mb-10 flex  h-1/6 w-10/12 flex-col justify-center text-white">
            <h4 className="text-lg text-green-100 ">WELCOME TO</h4>
            <h1 className="text-7xl font-bold lg:text-4xl">
              Brilliant Impact <br /> International College
            </h1>
          </div>
          <div className="m-auto  flex h-4/6 w-10/12  justify-center overflow-hidden">
            <Carousel interval={1000} showArrows={false}>
              <div className="h-5/6">
                <img
                  className=" h-full"
                  src={`${router.basePath}/assets/images/2.jpg`}
                  alt="image4"
                />
              </div>
              <div className="h-5/6">
                <img
                  className=" h-full"
                  src={`${router.basePath}/assets/images/5.jpg`}
                  alt="image4"
                />
              </div>
              <div className="h-5/6">
                <img
                  className=" h-full"
                  src={`${router.basePath}/assets/images/6.jpg`}
                  alt="image4"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
