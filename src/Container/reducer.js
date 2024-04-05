import {
    FETCH_DATA_REQUEST_MARKLIST,
    FETCH_DATA_SUCCESS_MARKLIST,
    FETCH_DATA_FAILURE_MARKLIST,
    FETCH_DATA_REQUEST_BACKLIST,
    FETCH_DATA_SUCCESS_BACKLIST,
    FETCH_DATA_FAILURE_BACKLIST,
    TOGGLE_CHECKBOX
  } from './action';
  import { combineReducers } from 'redux';
  const initialState = {
    data: [],
    dataBackList:[],
    selectedCheckboxes: [],
    isLoading: false,
    isBackListLoading:false,
    error: null,
    errorBackList:null,
    apiMarkListCalled:false,
    apiBackListCalled:false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST_MARKLIST:
        return {
          ...state,
          isLoading: true,
          error: null,
          apiMarkListCalled: true
        };
      case TOGGLE_CHECKBOX:
      const productId = action.payload;
      const isSelected = state?.selectedCheckboxes?.includes(productId);
      return {
        ...state,
        selectedCheckboxes: isSelected
          ? state?.selectedCheckboxes?.filter(id => id !== productId)
          : [...state.selectedCheckboxes, productId],
      };
      case FETCH_DATA_SUCCESS_MARKLIST:
        return {
          ...state,
          isLoading: false,
          data: [...state?.data,action.payload],
          apiMarkListCalled: true
        };
      case FETCH_DATA_FAILURE_MARKLIST:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          apiMarkListCalled: false
        };
        case FETCH_DATA_REQUEST_BACKLIST:
          return {
            ...state,
            isBackListLoading: true,
            errorBackList: null,
            apiBackListCalled: true
          };
        case FETCH_DATA_SUCCESS_BACKLIST:
          console.log("actiton",action.payload)
          return {
            ...state,
            isBackListLoading: false,
            dataBackList
            : [...state?.dataBackList,action.payload],
            apiBackListCalled: true
          };
        case FETCH_DATA_FAILURE_BACKLIST:
          return {
            ...state,
            isBackListLoading: false,
            errorBackList: action.payload,
            apiBackListCalled: false
          };
          
      default:
        return state;
    }
  };

export default reducer;