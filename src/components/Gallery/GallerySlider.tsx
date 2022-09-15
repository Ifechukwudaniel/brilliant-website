import { useRouter } from 'next/router';
import React from 'react';

export default function GallerySlider() {
  const router = useRouter();
  return (
    <div className="scroll-bar">
      <img
        className=" scroll-bar-item"
        src={`${router.basePath}/assets/images/graduationStudent.png`}
        alt="image4"
      />
      <img
        className=" scroll-bar-item"
        src={`${router.basePath}/assets/images/graduationStudent.png`}
        alt="image4"
      />
      <img
        className=" scroll-bar-item"
        src={`${router.basePath}/assets/images/graduationStudent.png`}
        alt="image4"
      />
      <img
        className=" scroll-bar-item"
        src={`${router.basePath}/assets/images/graduationStudent.png`}
        alt="image4"
      />
      <img
        className=" scroll-bar-item"
        src={`${router.basePath}/assets/images/graduationStudent.png`}
        alt="image4"
      />
    </div>
  );
}
