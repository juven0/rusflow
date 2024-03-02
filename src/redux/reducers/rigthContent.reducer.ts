import { ADD_NODE } from "../actions/rigthContent.actions";

const initialState = {}

export const RigthContentReducer = (state= initialState, action: any)=>{
    switch (action.type){
        case ADD_NODE:
            return action.payload
        default:
            return state
    }
}
