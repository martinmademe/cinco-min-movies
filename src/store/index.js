import React, { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  searchData: null
};
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING_STATE': {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case 'SET_SEARCH_DATA': {
      return {
        ...state,
        searchData: action.payload,
        isLoading: false
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

export const AppContext = createContext({ state: INITIAL_STATE, });

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;


