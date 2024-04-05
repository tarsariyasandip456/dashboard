import axios from 'axios';

// Action Types
export const FETCH_DATA_REQUEST_MARKLIST = 'FETCH_DATA_REQUEST_MARKLIST';
export const FETCH_DATA_SUCCESS_MARKLIST = 'FETCH_DATA_SUCCESS_MARKLIST';
export const FETCH_DATA_FAILURE_MARKLIST = 'FETCH_DATA_FAILURE_MARKLIST';
export const FETCH_DATA_REQUEST_BACKLIST = 'FETCH_DATA_REQUEST_BACKLIST';
export const FETCH_DATA_SUCCESS_BACKLIST = 'FETCH_DATA_SUCCESS_BACkLIST';
export const FETCH_DATA_FAILURE_BACKLIST = 'FETCH_DATA_FAILURE_BACKLIST';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
// Action Creators
export const toggleCheckbox = (productId) => ({
  type: TOGGLE_CHECKBOX,
  payload: productId,
});
const fetchDataRequestMarkList = () => {
  return {
    type: FETCH_DATA_REQUEST_MARKLIST,
  };
};

const fetchDataSuccessMarkList = (data) => {
  return {
    type: FETCH_DATA_SUCCESS_MARKLIST,
    payload: data,
  };
};

const fetchDataFailureMarkList = (error) => {
  return {
    type: FETCH_DATA_FAILURE_MARKLIST,
    payload: error,
  };
};
const fetchDataRequestBackList = () => {
  return {
    type: FETCH_DATA_REQUEST_BACKLIST,
  };
};

const fetchDataSuccessBackList = (data) => {
  return {
    type: FETCH_DATA_SUCCESS_BACKLIST,
    payload: data,
  };
};

const fetchDataFailureBackList = (error) => {
  return {
    type: FETCH_DATA_FAILURE_BACKLIST,
    payload: error,
  };
};

// Thunk Action Creator
export const fetchDataMarkList = (page)=>(dispatch, getState) => {
    const state = getState();
    console.log("called",!state?.apiMarkListCalled)
    if(!state?.apiMarkListCalled){
      dispatch(fetchDataRequestMarkList());
      axios.get('https://dummyjson.com/users')
      .then(response => {
        console.log("api called",!state?.apiMarkListCalled)
        const data = response.data;
        dispatch(fetchDataSuccessMarkList(data));
      })
      .catch(error => {
        dispatch(fetchDataFailureMarkList(error.message));
      });
 }
};
export const fetchDataBackList = (page)=>(dispatch, getState) => {
  const state = getState();
  console.log("callesssd",!state?.apiBackListCalled)
  if(!state?.apiBackListCalled){
    dispatch(fetchDataRequestBackList());
    axios.get('https://dummyjson.com/products')
    .then(response => {
      console.log("api called",!state?.apiBackListCalled)
      const data = response.data;
      dispatch(fetchDataSuccessBackList(data));
    })
    .catch(error => {
      dispatch(fetchDataFailureBackList(error.message));
    });
}
};
