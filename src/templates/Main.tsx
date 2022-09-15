import type { ReactNode } from 'react';

import Header from '@/components/Header/Index';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className=" antialiased">
    {props.meta}
    <div className="w-full">
      <Header />
      <div className="content py-5 text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
