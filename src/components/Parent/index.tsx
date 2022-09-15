import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className="mt-24">
      <div className="mt-12 mb-32 flex w-screen">
        <div className="flex w-1/4  ">
          <img
            className="h-40 opacity-30"
            src={`${router.basePath}/assets/images/mesage.png`}
          />
        </div>
        <div className="ml-3 w-2/4">
          <h1 className="text-center text-5xl font-extrabold text-green-700 ">
            What our Parents are Saying
          </h1>
          <p className="mt-1 text-center text-lg text-gray-900">
            Hear from their mouth, not ours
          </p>
        </div>
        <div className="flex w-1/4 justify-center"></div>
      </div>
    </div>
  );
}
