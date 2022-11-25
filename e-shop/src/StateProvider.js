import { createContext, useContext, useReducer } from "react";

//prepare data layer
export const StateContext = createContext();

//wrap or app and provide th data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
