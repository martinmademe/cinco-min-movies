import React, { createContext, useReducer, useContext, useEffect } from 'react';

const AppStateContext = createContext()
const AppDispatchContext = createContext()

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  searchData: null,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, isLoading: true };
    case 'FETCHED':
      return { ...state, isLoading: false, searchData: action.payload };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

const useAppState = () => useContext(AppStateContext)
const useAppDispatch = () => useContext(AppDispatchContext)

const fetchMovies = async (dispatch, url) => {
  dispatch({ type: 'FETCHING' });
  try {
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: 'FETCHED', payload: data.results });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR' });
  }
}

export { AppProvider, useAppState, useAppDispatch, fetchMovies }
