import React from 'react';

export type Props<
  T extends React.ComponentType
> = T extends React.ComponentType<infer TProps> ? TProps : never;
