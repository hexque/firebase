// libraries
import React, { FC, PropsWithChildren } from 'react';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="wrapper">
    <div className="wrapper-container">
      {children}
    </div>
  </div>
);

export default Wrapper;
