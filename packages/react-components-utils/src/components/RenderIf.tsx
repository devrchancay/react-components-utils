import React from 'react';

type RenderIfProps = {
  condition: boolean;
  children: any;
};

function RenderIf({ condition, children }: RenderIfProps) {
  return condition ? <React.Fragment>{children}</React.Fragment> : null;
}

export default RenderIf;
