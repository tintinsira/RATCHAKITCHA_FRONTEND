import React from "react";

const InputSelectFormTitle = ({
  lable,
  placeholder,
  name,
  value,
  onChange,
  isDisable,
  isRequire = false,
  textSmall,
  options, 
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={`${name}`}>
          {lable}
          {isRequire && (
            <>
              <span className="ml-1 text-[#D18585]">*</span>
            </>
          )}
        </label>
        <select
          id={`${name}`}
          name={`${name}`}
          className={`${
            isDisable
              ? 'bg-[#EAEAEA] text-gray-400'
              : 'bg-[#FFFAFA] text-gray-800 border border-solid border-gray-300'
          } w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad9e71]`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisable}
        >
          {options && (
            <>
              {options.map((option, index) => (
                <option key={index} value={option.ownerTitleId}>
                  {option.titleNameTh}
                </option>
              ))}
            </>
          )}
        </select>
        {textSmall && (
          <div className="flex justify-end">
            <small className="text-right">{textSmall}</small>
          </div>
        )}
      </div>
    </>
  );
};

export default InputSelectFormTitle;
