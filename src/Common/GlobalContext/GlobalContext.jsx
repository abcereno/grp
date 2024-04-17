import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // State for managing modal visibility
  const [response, setResponse] = useState(false);
  // Function to handle opening the modal
  const contextValue = {
    isLoading,
    setIsLoading,
    showModal,
    setShowModal,
    response,
    setResponse
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
