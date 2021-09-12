import React from 'react';
import { ReplacableComponent } from './ReplacableComponentType';
import { Props } from './Types';

export type Replaced<
  T extends ReplacableComponent<any>
> = T extends ReplacableComponent<infer T> ? React.ComponentType<Props<T>> : unknown;
