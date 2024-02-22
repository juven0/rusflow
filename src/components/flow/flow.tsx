import ReactFlow, {
    Controls,
    Background,
    Node,
    Edge, 
    MiniMap,
    useNodesState,
    useEdgesState,
    Connection,
    addEdge
  } from 'reactflow';

import './flow.scss'
import 'reactflow/dist/style.css';
import CustomNode from './nodes/nodes'
import { useCallback } from 'react';

const initialNodes:Node[]= [
    {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'input',
      },
      {
        id: '2',
        type:'custom',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
      },
  ];

const initialEdges:Edge[] = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

const nodeTypes={
    custom: CustomNode
}

function Flow():JSX.Element{

    const [nodes, , onNodesChange] = useNodesState(initialNodes)
    const [edgs, setEdgs, onEdgesChange] = useEdgesState(initialEdges)

    const onConnect = useCallback(
        (params: Edge| Connection)=>setEdgs((els)=> addEdge(params, els)), [setEdgs]
    )
   
    return(
        <div className="Flow">
            <ReactFlow 
                nodes={nodes} 
                edges={edgs}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}    
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    )
}

export default Flow