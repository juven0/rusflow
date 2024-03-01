import nodeText from './components/flow/nodes/nodeText';
import nodeButton from './components/flow/nodes/nodeButton';
import CustomNode from './components/flow/nodes/nodes'
import nodePayload from './components/flow/nodes/nodePayload';

export const NodeTypes={
    custom: CustomNode,
    nodeText: nodeText,
    nodeButton: nodeButton,
    nodePayload: nodePayload
}