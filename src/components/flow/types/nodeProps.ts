import {Position} from 'reactflow'

export type NodeProps<T> = {
    id: string;
    data: T;
    name: string,
    dragHandle?: boolean;
    type?: string;
    selected?: boolean;
    isConnectable?: boolean;
    zIndex?: number;
    xPos: number;
    yPos: number;
    dragging: boolean;
    targetPosition?: Position;
    sourcePosition?: Position;
  };