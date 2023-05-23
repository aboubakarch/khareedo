import { useFormikContext } from 'formik';
import React from 'react';

const Button = ({
  title = '',
  Icon,
  iconColor = '',
  className = '',
  type = 'button',
  onClick,
  ...resetProps
}) => {
  const { handleSubmit } = useFormikContext() || {};
  return (
    <button
      {...resetProps}
      onClick={type === 'button' ? onClick : handleSubmit}
      className={`mt-[66px] flex items-center text-white bg-black px-[26px] py-[16px] text-[22px] ${className}`}
    >
      {Icon && <Icon color={iconColor} />}
      <span className={`${Icon ? 'ml-[8px]' : ''}`}>{title}</span>
    </button>
  );
};

export default Button;
