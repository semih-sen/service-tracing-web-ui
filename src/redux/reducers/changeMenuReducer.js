import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";
export default function changeMenuReducer(state=initialState.currentMenu,action){
    switch (action.type) {
        case actionTypes.CHANGE_MENU:
            return action.payload
            
    
        default:
            return state;
    }
}