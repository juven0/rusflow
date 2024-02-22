import ReactFlow, {
    Controls,
    Background,
    Node,
    Edge
  } from 'reactflow';

import './flow.scss'
import 'reactflow/dist/style.css';

const nodes:Node[]= [
    {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'input',
      },
      {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
      },
  ];
  const edges:Edge[] = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

function Flow():JSX.Element{

   
    return(
        <div className="Flow">
            <ReactFlow nodes={nodes} edges={edges}>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Flow