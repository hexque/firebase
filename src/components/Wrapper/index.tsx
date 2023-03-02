// libraries
import React, { FC, PropsWithChildren } from 'react';
// components
import Header from 'components/Header';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content-wrapper">
      {children}
    </div>
  </div>
);

export default Wrapper;
