import React from 'react';

type RenderIfProps = {
  condition: boolean;
  children: any;
};

const RenderIf = ({ children, condition }: RenderIfProps) => {
  return condition ? <React.Fragment>{children}</React.Fragment> : null;
};

export default RenderIf;
