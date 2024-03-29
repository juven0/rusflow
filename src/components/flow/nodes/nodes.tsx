import {memo} from 'react'
import {Handle,NodeProps, Position , NodeToolbar } from 'reactflow'

const CustomNode = ({
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
            {data?.label}<br/>
            <label htmlFor="">{data?.value}</label>
            <Handle
                type='source'
                position={sourcePosition}
                isConnectable={isConnectable}
            />
        </>
    )
}

CustomNode.displayName = "juveno Node"

export default memo(CustomNode)