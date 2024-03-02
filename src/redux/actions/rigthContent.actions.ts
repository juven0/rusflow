import { Node } from "reactflow"
import { Dispatch } from "redux"

export const ADD_NODE = "ADD_NODE"

export const AddNode = (node: Node)=>{
    return async (dispatch: Dispatch):Promise<void>=>{
        dispatch({
            type: ADD_NODE,
            payload: node
        })
    }
}