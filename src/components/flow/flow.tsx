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
import { useCallback } from 'react';
import { NodeTypes } from '../../nodeType';


const initBgColor = '#000000';
const connectionLineStyle = { stroke: '#fff' };

const nodeTypes = NodeTypes

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
        data: { 
            label: 't1',
            value: 'media response'
        },
        position: { x: 100, y: 100 },
      },
      {
        id: '3',
        type:'nodeText',
        data: { 
            label: 'text 1',
            text: 'text response'
        },
        position: { x: 300, y: 100 },
      },
      {
        id: '4',
        type:'nodeButton',
        data: { 
            label: 'btn',
            text: 'button'
        },
        position: { x: 300, y: 200 },
      },
      {
        id: '5',
        type:'nodePayload',
        data: { 
            name: 'pld',
            value: 'payload'
        },
        position: { x: 400, y: 200 },
      },
  ];

const initialEdges:Edge[] = [{ id: '1-2', source: '1', target: '2', animated: true, style: { stroke: '#fff' }, }];



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
                style={{ background: initBgColor }}
                connectionLineStyle={connectionLineStyle}
            >
                <Background />
                <Controls />
                <MiniMap 
                      nodeColor={(n) => {
                        if (n.type === 'custom') return '#3eff37';
                        return '#d4d4d4';
                      }}
                />
            </ReactFlow>
        </div>
    )
}

export default Flow