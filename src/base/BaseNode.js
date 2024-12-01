import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, nodeType, data, children, onNameChange, onTypeChange }) => {
    // Default state for name and type
    const [currName, setCurrName] = useState(data?.inputName || id.replace('custom-', 'input_'));
    const [inputType, setInputType] = useState(data?.inputType || 'Text');

    // Handle changes for name and type
    const handleNameChange = (e) => {
        setCurrName(e.target.value);
        if (onNameChange) onNameChange(e.target.value);
    };

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
        if (onTypeChange) onTypeChange(e.target.value);
    };

    return (
        <div className='w-fit h-[200px] flex flex-col items-center justify-between border border-black bg-blue-50 p-[10px] rounded-md' >
            <div className='flex  '>
                <span className='font-bold mx-3'>{nodeType}</span>
            </div>
            <div className='flex items-center justify-center flex-col'>
                {/* Name input field */}
                <label>
                    Name
                    <input className='mx-2' type="text" value={currName} onChange={handleNameChange} />
                </label>
                {/* Type selector for specific node types */}
                {nodeType === 'InputNode' || nodeType === "OutputNode" && (
                    <label className='my-3'>
                        Type
                        <select className='mx-2' value={inputType} onChange={handleTypeChange}>
                            <option value="Text">Text</option>
                            <option value="File">File</option>
                        </select>
                    </label>
                )}
            </div>

            {/* Handle for connections */}
            <Handle type="source" position={Position.Right} id={`${id}-value`} />
            {children}
        </div>
    );
};
