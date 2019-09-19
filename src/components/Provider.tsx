import React, { useReducer, useMemo } from 'react';
import { ReactRehooxContext as Context } from './Context';
import { ProviderProps } from '../types/Provider';
import observer from '../observer';

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return { store: action.store }
  }
}

const initialState = { store: {} };

const Provider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const observerableState = observer(state, dispatch);

  return (
    <Context.Provider value={observerableState} >{children}</Context.Provider>
  );
};

export default Provider;
