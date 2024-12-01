import React from 'react';
import { BaseNode } from '../base/BaseNode';

export const TextNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      nodeType="TextNode"
      data={data}
    >
      <div className='flex items-center p-2'>
        <label>Text Input </label>
        <textarea className='mx-3' placeholder="Type your text here..." />
      </div>
    </BaseNode>
  );
};
