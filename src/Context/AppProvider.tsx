import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }: { children: React.ReactNode }) {
  const [endFirstDet, setEndFirstDet] = useState(false);
  const togleEndF = (p: boolean) => {
    setEndFirstDet(p);
  };
  return (
    <AppContext.Provider value={ { endFirstDetail: endFirstDet, toggleEndF: togleEndF } }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
