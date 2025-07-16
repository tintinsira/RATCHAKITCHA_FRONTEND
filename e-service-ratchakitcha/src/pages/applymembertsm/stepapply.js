const StepApply = ({
  numStep = 1
}) => {
  return (
    <>
      <div className="my-4 py-8 px-8 flex">
        <div className="flex justify-between items-center w-1/2 gap-6 mx-auto relative">
          <div className="absolute top-[30%] left-[15%] w-[80%] h-0.5 bg-[#792024] z-0"></div>
          <div className="absolute top-[30%] right-[15%] w-[80%] h-0.5 bg-[#792024] z-0"></div>
          <div className="flex flex-col items-center z-10">
            <div
              className={`${
                numStep === 1
                  ? 'text-[#efece3] bg-[#792024]'
                  : 'text-white bg-[#efece3]'
              }  rounded-full border-2 px-4 py-2 font-bold`}
            >
              1
            </div>
            <span>ข้อมูลสมาชิก</span>
          </div>
          <div className="flex flex-col items-center z-10">
            <div
              className={`${
                numStep === 2
                  ? 'text-[#efece3] bg-[#792024]'
                  : 'text-white bg-[#efece3]'
              }  rounded-full border-2 px-4 py-2 font-bold`}
            >
              2
            </div>
            <span>ข้อมูลการติดต่อ</span>
          </div>
          <div className="flex flex-col items-center z-10">
            <div
              className={`${
                numStep === 3
                  ? 'text-[#efece3] bg-[#792024]'
                  : 'text-white bg-[#efece3]'
              }  rounded-full border-2 px-4 py-2 font-bold`}
            >
              3
            </div>
            <span>บัญชีผู้ใช้งาน</span>
          </div>
          <div className="flex flex-col items-center z-10">
            <div
              className={`${
                numStep === 4
                  ? 'text-[#efece3] bg-[#792024]'
                  : 'text-white bg-[#efece3]'
              }  rounded-full border-2 px-4 py-2 font-bold`}
            >
              4
            </div>
            <span>ยืนยันการส่งข้อมูล</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepApply;
