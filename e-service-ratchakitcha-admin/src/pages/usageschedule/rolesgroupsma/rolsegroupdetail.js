import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';
import InputForm from '@/components/input/InputForm';
 
import { FaCheckCircle } from 'react-icons/fa';

function RolesGroupDetail() {
  const router = useRouter();

  const [openAddGroupModal, setOpenAddGroupModal] = useState(false);
  const [wantToUseList, setWantToUseList] = useState([]);
  const listRefToUse = [
    { idx: '1', textUse: 'ระบบขอรับสำเนาข้อมูลราชกิจจานุเบกษา' },
    { idx: '2', textUse: 'ระบบขอทราบวันเผยแพร่ราชกิจจานุเบกษา' },
    { idx: '3', textUse: 'ระบบค้นหาประกาศเกี่ยวกับการล้มละลาย' },
  ];

  return (
    <>
      <LayoutAfterLogin>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">เพื่มกลุ่มสมาชิก</span>
          <hr className="my-5" />
          <div className="w-3/4 flex flex-col mx-auto">
            <div className="flex flex-row gap-4 w-full ">
              <div className="basis-full ">
                <InputForm
                  lable="ชื่อกลุ่ม"
                  type="text"
                  placeholder={`กรุณากรอกชื่อกลุ่ม`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full mt-4">
              <span className="text-xl font-semibold my-0">
                ต้องการใช้งานระบบ
              </span>
              <div>
                <small className="text-[#543FBF] mt-2">
                  เลือกได้มากกว่า 1 อย่าง
                </small>
                <div
                  name="listRefToUse"
                  className="flex flex-row mt-5 mb-2 gap-4"
                >
                  {listRefToUse.map((item, index) => {
                    const isChecked = wantToUseList.some(
                      (selected) => selected.idx === item.idx
                    );

                    return (
                      <label
                        key={`wantUse` + index}
                        htmlFor={`wantUse` + index}
                        className="w-full lg:basis-1/2 mb-2 lg:mb-0"
                      >
                        <div
                          className={`${
                            isChecked
                              ? 'relative border-[#fefefe] bg-[#efece3]'
                              : 'border-[#E2E8F5]'
                          } flex lg:flex-row flex-col border-2 rounded-lg py-3 px-4 cursor-pointer`}
                        >
                          {isChecked && (
                            <div className="absolute -top-4 -right-2">
                              <FaCheckCircle
                                size={20}
                                className="text-[#4F61A8]"
                              />
                            </div>
                          )}
                          <input
                            type="checkbox"
                            id={`wantUse` + index}
                            checked={isChecked}
                            onChange={(e) => {
                              const isAlreadySelected = wantToUseList.some(
                                (selected) => selected.idx === item.idx
                              );

                              setWantToUseList((prev) =>
                                isAlreadySelected
                                  ? prev.filter(
                                      (selected) => selected.idx !== item.idx
                                    )
                                  : [...prev, item]
                              );
                            }}
                            className="hidden"
                          />
                          <div className="flex flex-col lg:basis-4/5">
                            {item.textUse}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex justify-start">
            <span className="text-xl">ข้อมูลกลุ่มสมาชิก</span>
          </div>
          <div className="w-full">
            <table className="w-full min-w-full table-auto text-left border-separate border-spacing-y-4">
              <tbody>
                <tr className="bg-[#efece3] shadow-md gap-4">
                  <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                    <label className="gap-2 flex justify-center">
                      <input type="checkbox" onChange={(e) => {}} />
                      <span>1</span>
                    </label>
                  </th>
                  <th className="px-1 py-2 font-normal w-[25%]">
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">ชื่อภาษาไทย : </span>
                      <p>นายทดสอบ1 ระบบ</p>
                    </label>
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">
                        ชื่อภาษาอังกฤษ :{' '}
                      </span>
                      <p>MR. TEST1 SYSTEM ระบบ</p>
                    </label>
                  </th>
                  <th className="px-1 py-2 font-normal w-[25%]">
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">อีเมล : </span>
                      <p>testsystem@test.co.th</p>
                    </label>
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">
                        เบอร์โทรศัพท์ :{' '}
                      </span>
                      <p>090-099-9999</p>
                    </label>
                  </th>
                </tr>
                <tr className="bg-[#efece3] shadow-md gap-4">
                  <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                    <label className="gap-2 flex justify-center">
                      <input type="checkbox" onChange={(e) => {}} />
                      <span>2</span>
                    </label>
                  </th>
                  <th className="px-1 py-2 font-normal w-[25%]">
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">ชื่อภาษาไทย : </span>
                      <p>นายทดสอบ1 ระบบ</p>
                    </label>
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">
                        ชื่อภาษาอังกฤษ :{' '}
                      </span>
                      <p>MR. TEST1 SYSTEM ระบบ</p>
                    </label>
                  </th>
                  <th className="px-1 py-2 font-normal w-[25%]">
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">อีเมล : </span>
                      <p>testsystem@test.co.th</p>
                    </label>
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">
                        เบอร์โทรศัพท์ :{' '}
                      </span>
                      <p>090-099-9999</p>
                    </label>
                  </th>
                </tr>
                <tr className="bg-[#efece3] shadow-md gap-4">
                  <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                    <label className="gap-2 flex justify-center">
                      <input type="checkbox" onChange={(e) => {}} />
                      <span>3</span>
                    </label>
                  </th>
                  <th className="px-1 py-2 font-normal w-[25%]">
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">ชื่อภาษาไทย : </span>
                      <p>นายทดสอบ1 ระบบ</p>
                    </label>
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">
                        ชื่อภาษาอังกฤษ :{' '}
                      </span>
                      <p>MR. TEST1 SYSTEM ระบบ</p>
                    </label>
                  </th>
                  <th className="px-1 py-2 font-normal w-[25%]">
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">อีเมล : </span>
                      <p>testsystem@test.co.th</p>
                    </label>
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">
                        เบอร์โทรศัพท์ :{' '}
                      </span>
                      <p>090-099-9999</p>
                    </label>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mx-4">
            <div className="flex basis-1/4 gap-4">
              <button
                className="bg-gray-300 text-black hover:bg-gray-500 hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  router.back();
                }}
              >
                <span className="my-auto">ย้อนกลับ</span>
              </button> 
              <button
                className="bg-[#A7D9B4] text-[#2F4F4F] hover:bg-[#8CC49C] hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
                onClick={(e) => {}}
              >
                <span className="my-auto">บันทึก</span>
              </button>
            </div>
          </div>
        </div>
      </LayoutAfterLogin>
    </>
  );
}

export default RolesGroupDetail;
