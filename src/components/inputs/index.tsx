import React, { ChangeEvent } from 'react';

interface InputsProps {
    label: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<InputsProps> = ({ label, type, onChange }) => {
    return (
        <>
            <label htmlFor={type}>{label}</label>
            <input onChange={onChange} id={type} placeholder={`${label}ingizni kiriting`} type={type} />
        </>
    );
}

export default Inputs;
