import React from 'react';
import { ReactRehooxContext as Context } from '../components/Context';

const useRehoox = () => {
  const value = React.useContext(Context);
  return value;
};

export default useRehoox;
