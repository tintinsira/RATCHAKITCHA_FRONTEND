const InputTextareaForm = ({
  lable,
  type,
  placeholder,
  name,
  value,
  onChange,
  isDisable,
  isRequire = false,
  textSmall,
  rows = 4,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span>
          {lable}
          {isRequire && (
            <>
              <span className="ml-1 text-[#D18585]">*</span>
            </>
          )}
        </span>
        <textarea
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`${
            isDisable
              ? 'bg-[#EAEAEA] text-gray-600'
              : 'bg-[#FFFAFA] text-gray-800 border border-solid border-gray-300 focus:ring-2'
          } w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad9e71] resize-none`}
          disabled={isDisable}
          rows={rows}
        />
        {textSmall && (
          <div className="flex justify-end">
            <small className="text-right">{textSmall}</small>
          </div>
        )}
      </div>
    </>
  );
};

export default InputTextareaForm;
