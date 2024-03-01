import { Edge } from 'reactflow'
import { ADD_NEW_EDGE, INIT_EDGE } from '../actions/edge.actions'

const initialState: Edge[] = []

export default function EdgeReducer(state = initialState, action: any){
    switch(action.type){
        case INIT_EDGE:
            return action.payload
        case ADD_NEW_EDGE:
            return [...state, action.payload]
        default:
            return state
    }
}