import React from 'react';
import { BaseNode } from '../base/BaseNode';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      nodeType="OutputNode"
      data={data}
    >
      <div>
        <p>Output Node Content</p>
      </div>
    </BaseNode>
  );
};
