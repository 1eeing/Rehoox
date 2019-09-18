import React from 'react';
import { ReactRehooxContext as Context } from './Context';
import { ProviderProps } from '../types/Provider';

const Provider: React.FC<ProviderProps> = ({
  store,
  children,
}) => {
  return (
    <Context.Provider value={store} >{children}</Context.Provider>
  );
};

export default Provider;
