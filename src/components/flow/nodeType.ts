import nodeText from './nodes/nodeText';
import nodeButton from './nodes/nodeButton';
import CustomNode from './nodes/nodes'
import nodePayload from './nodes/nodePayload';

export const NodeTypes={
    custom: CustomNode,
    nodeText: nodeText,
    nodeButton: nodeButton,
    nodePayload: nodePayload
}