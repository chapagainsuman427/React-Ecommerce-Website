// someReducer.js
const initialState = {
    // Define your initial state here
    // For example:
    data: [],
    loading: false,
    error: null
  };
  
  const someReducer = (state = initialState, action) => {
    switch (action.type) {
      // Define your action types and corresponding state updates here
      // For example:
      case 'FETCH_DATA_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          data: action.payload,
          loading: false
        };
      case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default someReducer;
  