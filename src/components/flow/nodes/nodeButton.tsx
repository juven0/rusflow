import {memo} from 'react'
import {Handle,NodeProps, Position , NodeToolbar } from 'reactflow'

const NodeButton = ({
    data, 
    isConnectable,
    targetPosition = Position.Top,
    sourcePosition = Position.Bottom
}: NodeProps)=>{
    return(
        <>
             <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
                <button>delete</button>
                <button>copy</button>
                <button>expand</button>
            </NodeToolbar>
            <Handle 
                type='target'
                position={targetPosition}
                isConnectable ={isConnectable}
            />
            <label className='name' >{data?.label}</label>
            <br/>
            <label className='value'>{data?.text}</label>
            <Handle
                type='source'
                position={sourcePosition}
                isConnectable={isConnectable}
            />
        </>
    )
}

export default memo(NodeButton)