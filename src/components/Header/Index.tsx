import { useRouter } from 'next/router';
import React from 'react';

import type { HeaderLinkProps } from './HeaderLink';
import { HeaderLink } from './HeaderLink';

export default function Header() {
  const router = useRouter();
  const headerLinks: HeaderLinkProps[] = [
    {
      button: false,
      text: 'About Us',
      link: '/about/',
    },
    {
      button: false,
      text: 'Life in School',
      link: '/about/',
    },
    {
      button: false,
      text: 'Parent’s Testimonials',
      link: '/about/',
    },
  ];

  return (
    <div className="flex h-14 w-full py-4 px-10">
      <div className=" w-2/4 bg-white">
        <div className="text-2xl font-bold text-gray-900">
          <img
            className="h-14"
            src={`${router.basePath}/assets/images/logo.png`}
            alt="image4"
          />
        </div>
      </div>
      <div className=" flex w-2/4 justify-end lg:hidden ">
        <ul className="flex flex-wrap text-base ">
          {headerLinks.map((headerLink, i) => (
            <HeaderLink key={i} {...headerLink} />
          ))}
        </ul>
      </div>
    </div>
  );
}
