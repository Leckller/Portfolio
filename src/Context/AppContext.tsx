import { createContext } from 'react';

type AppType = {
  endFirstDetail: boolean,
  toggleEndF: (p: boolean) => void,
};

const AppContext = createContext({} as AppType);

export default AppContext;
