import React, { FC } from 'react';
import { ReplacableComponent } from './ReplacableComponentType';
import { Props } from './Types';
import { createKey } from './CreateKey';
import { useReplacement } from './UseReplacement';

export function createReplacement<T extends React.ComponentType<any>>(
  DefaultComponent: T
): ReplacableComponent<React.ComponentType<Props<T>>> {
  const key = createKey(DefaultComponent);

  const renderer: FC<Props<T>> = (props) => {
    const Component = useReplacement(DefaultComponent, key);
    return <Component {...props} />;
  };

  renderer.displayName = DefaultComponent.displayName
    ? `Replacement_${DefaultComponent.displayName}`
    : 'Replacement';

  renderer.propTypes = DefaultComponent.propTypes;
  const replacement = renderer as ReplacableComponent<T>;
  replacement.key = key;
  replacement.default = DefaultComponent;
  return replacement as any;
}
