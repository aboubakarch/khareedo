import { useFormikContext } from 'formik';
import React from 'react';

const RadioButton = ({
  className = '',
  labelClass = '',
  inputClass = '',
  type = 'text',
  name,
  value,
  id,
  placeholder,
  label,
}) => {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext() || {};

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFieldValue(value, values[value] ? false : true);
    handleChange(e);
  };
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          className={`text-[16px] text-gray-700 font-medium mb-[5px] cursor-pointer ${labelClass}`}
        >
          {label}
        </label>
      )}
      <input
        onChange={handleRadioChange}
        onBlur={handleBlur}
        type={type}
        name={name}
        value={value}
        checked={values[value]}
        id={id || name}
        placeholder={placeholder}
        className={`border-[1px] border-slate-800 outline-none h-[40px] px-[5px] ${inputClass}`}
      />
      {errors[name] && touched[name] && (
        <p className="text-red-500 text-[12px] mt-[5px]">{errors[name]}</p>
      )}
    </div>
  );
};

export default RadioButton;
