import React from 'react';
import { BaseNode } from '../base/BaseNode';
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} nodeType="LLMNode" data={data}>
      {/* LLM-specific content */}
      <div>
        <label>Enter Prompt </label>
        <input type="text" placeholder="Type your prompt here..." style={{ width: '100%' }} />
      </div>

      {/* Target Handles (left side) */}
      <Handle type="target" position={Position.Left} id={`${id}-top`} style={{ top: `${100 / 3}%` }} />
      <Handle type="target" position={Position.Left} id={`${id}-bottom`} style={{ top: `${200 / 3}%` }} />
    </BaseNode>
  );
};
