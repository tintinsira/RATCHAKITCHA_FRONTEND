const InputForm = ({
  refFucn,
  lable,
  type,
  placeholder,
  name,
  value,
  onChange,
  isDisable,
  isRequire = false,
  textSmall,
  handleKeyDown,
  handOnKeyPress,
  handOnInput,
  isRequireSomething = false,
  errorMessage,
  typeInputForm = 'other',
}) => {
  return (
    <>
      <div className="flex flex-col">
        <span className={`${!lable && 'flex justify-end'}`}>
          {lable}
          {isRequire && (
            <>
              {typeInputForm === 'VRF' ? (
                <>
                  <span
                    className={`${
                      isRequireSomething ? 'text-blue-700' : 'text-[#D18585]'
                    } ml-1 custom-text-outline`}
                  >
                    *
                  </span>
                </>
              ) : (
                <>
                  <span
                    className={`${
                      isRequireSomething ? 'text-blue-700' : 'text-[#D18585]'
                    } ml-1`}
                  >
                    *
                  </span>
                </>
              )}
            </>
          )}
        </span>
        <input
          ref={refFucn}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value || ''}
          onChange={onChange}
          className={`${
            isDisable
              ? 'bg-[#EAEAEA] text-gray-600'
              : errorMessage
              ? 'bg-red-100 ring-red-500'
              : 'bg-[#FFFAFA] text-gray-800 border border-solid border-gray-300 focus:ring-2 focus:ring-[#ad9e71]'
          } w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 `}
          disabled={isDisable}
          onKeyDown={handleKeyDown}
          onKeyPress={handOnKeyPress}
          onInput={handOnInput}
        />
        {textSmall && (
          <div className="flex justify-end">
            <small className="text-right">{textSmall}</small>
          </div>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
};

export default InputForm;
