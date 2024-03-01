import { Node } from 'reactflow'
import {Dispatch} from 'redux'


export const INIT_NODES = 'INIT_NODE'
export const ADD_NEW_NODE = 'ADD_NEW_NODE'
export const DELETE_NODE = 'DELETE_NODE'

export const InitNodes = (nodes: Node[])=>{
    return async (dispatch: Dispatch):Promise<void> =>{
        dispatch({
            type: INIT_NODES,
            payload:{
                nodes: nodes
            }
        })
    }
}

export const AddNewNode = (node: Node)=>{
    return async (dispatch: Dispatch):Promise<void> =>{
        dispatch({
            type: ADD_NEW_NODE,
            payload:{
                nodes: node
            }
        })
    }
}

export const DeleteNode = (idNode: string)=>{
    return async (dispatch: Dispatch):Promise<void> =>{
        dispatch({
            type: DELETE_NODE,
            payload:{
                idNode: idNode
            }
        })
    }
}