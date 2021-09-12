import React, { FC } from 'react';
import PropTypes from 'prop-types';

type ReplacesMap = Record<string, React.ComponentType<any>>;

const DEFAULT_VALUE: ReplacesMap = {};

export const ReplacesContext = React.createContext<ReplacesMap>(DEFAULT_VALUE);
ReplacesContext.displayName = 'ReplacesContext';

export const ReplacesProvider: FC<{ value: ReplacesMap }> = (props) => {
  const { value } = props;
  return (
    <ReplacesContext.Provider value={value}>
      {props.children}
    </ReplacesContext.Provider>
  );
};

ReplacesProvider.displayName = 'ReplacesProvider';

ReplacesProvider.propTypes = {
  value: PropTypes.objectOf(PropTypes.elementType.isRequired).isRequired as any,
};
