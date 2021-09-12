import React from 'react';

export type ReplacableComponent<
  T extends React.ComponentType<any> = React.ComponentType
> = T & {
  default: T;
  key: string;
};
