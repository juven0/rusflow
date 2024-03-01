import { Edge } from 'reactflow'
import {Dispatch} from 'redux'


export const INIT_EDGE = 'INIT_EDGE'
export const ADD_NEW_EDGE  = 'ADD_NEW_EDGE '
export const DELETE_EDGE  = 'DELETE_EDGE '

export const InitNodes = (edges: Edge[])=>{
    return async (dispatch: Dispatch):Promise<void> =>{
        dispatch({
            type: INIT_EDGE ,
            payload:{
                nodes: edges
            }
        })
    }
}

export const AddNewNode = (edge: Node)=>{
    return async (dispatch: Dispatch):Promise<void> =>{
        dispatch({
            type: ADD_NEW_EDGE ,
            payload:{
                nodes: edge
            }
        })
    }
}

export const DeleteNode = (idEdge: string)=>{
    return async (dispatch: Dispatch):Promise<void> =>{
        dispatch({
            type: DELETE_EDGE ,
            payload:{
                idNode: idEdge
            }
        })
    }
}