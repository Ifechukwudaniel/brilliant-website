import Link from 'next/link';
import React from 'react';

export interface HeaderLinkProps {
  link: string;
  button: Boolean;
  text: string;
}
export function HeaderLink(props: HeaderLinkProps) {
  return (
    <li className={`mr-6  p-3  shadow-emerald-800 lg:visible `}>
      <Link href={props.link}>
        <a className="border-none text-gray-700 hover:text-gray-900">
          {props.text}
        </a>
      </Link>
    </li>
  );
}
