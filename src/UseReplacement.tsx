import React, { FC, useContext } from 'react';
import { ReplacesContext } from './ReplacesContext';
import { Props } from './Types';

const Empty: FC = () => null;
Empty.displayName = 'Empty';

export function useReplacement<T extends React.ComponentType<any>>(
  DefaultComponent: T,
  key: string
): React.ComponentType<Props<T>> {
  const replaces = useContext(ReplacesContext);
  const replace = replaces[key] as T;

  if (replace != null) {
    return replace;
  }

  if (replace === null) {
    return Empty;
  }

  return DefaultComponent;
}
