import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function serviceListReducer(state = initialState.serviceList,action) {
  switch (action.type) {
    case actionTypes.GET_SERVICES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
