import { Node } from 'reactflow'
import {ADD_NEW_NODE, INIT_NODES} from '../actions/nodes.actions'

const initialState: Node[] = []

export default function NodesReducer(state = initialState, action: any){
    switch(action.type){
        case INIT_NODES:
            return action.payload
        case ADD_NEW_NODE:
            return [...state, action.payload]
        default:
            return state
    }
}