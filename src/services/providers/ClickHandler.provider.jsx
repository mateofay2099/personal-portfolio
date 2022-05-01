import React, { createContext, useContext, useState } from 'react';

const ClickHandlerContext = createContext({});

export const useClickHandlerContext = () => useContext(ClickHandlerContext);

export const ClickHandlerProvider = ({ children }) => {
  const [functionsToExecute, setFunctionsToExecute] = useState([]);

  const addFunctionToExecute = (functionToAdd) => {
    setFunctionsToExecute((allFunctions) => [...allFunctions, functionToAdd]);
  };

  const resetFunctionsToExecute = () => setFunctionsToExecute([]);

  const executeAllFunctions = () => {
    functionsToExecute.forEach((func) => func());
    resetFunctionsToExecute();
  };

  const clickHandlerContext = { addFunctionToExecute, resetFunctionsToExecute };

  return (
    <ClickHandlerContext.Provider value={clickHandlerContext}>
      <main onClick={executeAllFunctions} translate="no">
        {children}
      </main>
    </ClickHandlerContext.Provider>
  );
};
