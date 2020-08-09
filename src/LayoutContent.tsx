import React, { PropsWithChildren } from 'react';

export default function LayoutContent({ children }: PropsWithChildren<{}>) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
