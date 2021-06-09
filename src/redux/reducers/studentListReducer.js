import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function studentListReducer(state=initialState.studentList,action){
    switch (action.type) {
        case actionTypes.GET_STUDENTS_SUCCESS:
            return action.payload;
            
        default:
            return state;
    }
}