import React from 'react';

const Input = ({
  className = '',
  labelClass = '',
  inputClass = '',
  onChange,
  value,
  type = 'text',
  name,
  id,
  placeholder,
  label,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={name || id}
          className={`text-[16px] text-gray-700 font-medium mb-[5px] cursor-pointer ${labelClass}`}
        >
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        className={`border-[1px] border-slate-800 outline-none h-[40px] px-[5px] ${inputClass}`}
      />
    </div>
  );
};

export default Input;
