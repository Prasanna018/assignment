import React from 'react';
import { BaseNode } from '../base/BaseNode';

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      nodeType="InputNode"
      data={data}
      onNameChange={(newName) => console.log(`Name changed to: ${newName}`)}
      onTypeChange={(newType) => console.log(`Type changed to: ${newType}`)}
    >
      <div>
        <label>
          File Upload
          <input type="file" />
        </label>
      </div>
    </BaseNode>
  );
};
