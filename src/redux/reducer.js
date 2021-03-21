import { firebaseReducer, firestoreReducer } from "react-redux-firebase";
import { combineReducers, createStore } from "redux";
import { initialState } from "./initialState";

export const SET_CAROUSEL_IMAGES_ACTION_TYPE =
  "SET_CAROUSEL_IMAGES_ACTION_TYPE";

export const GET_ALL_BREEDS_ACTION_TYPE = "GET_ALL_BREEDS_ACTION_TYPE";
export const SET_SUB_BREED_ACTION_TYPE = "SET_SUB_BREED_ACTION_TYPE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAROUSEL_IMAGES_ACTION_TYPE: {
      return {
        ...state,
        carouselImages: action.payload,
      };
    }
    case GET_ALL_BREEDS_ACTION_TYPE: {
      return {
        ...state,
        allBreeds: action.payload,
      };
    }
    case SET_SUB_BREED_ACTION_TYPE: {
      return {
        ...state,
        selectedBreed: action.payload,
      };
    }
    default:
      return state;
  }
};


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
