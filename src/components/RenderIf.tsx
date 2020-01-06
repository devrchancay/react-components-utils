import React from 'react';

type RenderIfProps = {
  children: any;
};

const RenderIf = ({ children }: RenderIfProps) => {
  return children ? <React.Fragment>{children}</React.Fragment> : null;
};

export default RenderIf;
