import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';
import InputForm from '@/components/input/InputForm';
import InputTextareaForm from '@/components/input/InputTextareaForm';
import { FaCheckCircle } from 'react-icons/fa';
import StepCreateGazService from './stepcreategazservice';

function CreateGazServicer() {
  const router = useRouter();

  // รายการต้นทาง ไม่มี count
  const listRefToUse = [
    { idx: '1', textUse: 'ขอสำเนาที่มีผู้รับรอง' },
    { idx: '2', textUse: 'ขอสำเนาที่มีผู้รับรอง2' },
    { idx: '3', textUse: 'ขอสำเนาที่มีผู้รับรอง3' },
  ];

  // state เก็บรายการที่ผู้ใช้เลือกพร้อม count
  const [wantToUseList, setWantToUseList] = useState([]);

  // ฟังก์ชันปรับ count ไม่ให้ต่ำกว่า 1
  const updateCount = (idx, delta) => {
    setWantToUseList((prev) =>
      prev.map((item) =>
        item.idx === idx
          ? { ...item, count: Math.max(1, item.count + delta) }
          : item
      )
    );
  };

  return (
    <LayoutAfterLogin>
      <StepCreateGazService numStep={2} />

      <div className="flex gap-4"> 
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col w-3/4">
          <span className="text-xl">กรอกคำร้องขอรับบริการ</span>
          <hr className="my-5" />

          <div className="w-full flex flex-col mx-auto">
            <div className="w-full flex flex-col mx-auto">
              <div className="flex flex-row gap-4 w-full">
                <div className="basis-3/4">
                  <InputForm
                    lable="รายการเรื่องที่ต้องการขอข้อมูล"
                    type="text"
                    placeholder={`รายการเรื่องที่ต้องการขอข้อมูล`}
                    name=""
                    value={'ขอใช้งานการทดสอบระบบ'}
                    onChange={(e) => {}}
                    isDisable={true}
                    isRequire={true}
                    textSmall={``}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4 w-full mt-4">
                <div className="basis-3/5">
                  <InputTextareaForm
                    lable="วัตถุประสงค์ในการขอข้อมูล"
                    type="text"
                    placeholder={`กรอก วัตถุประสงค์ในการขอข้อมูล`}
                    name="obj"
                    value={''}
                    onChange={(e) => {}}
                    isDisable={false}
                    isRequire={false}
                    textSmall={``}
                    rows={6}
                  />
                </div>
                <div className="basis-2/5">
                  <span className="text-xl font-semibold">
                    ประเภทของสำเนาข้อมูล
                  </span>
                  <div className="flex flex-col mt-2 mb-2 gap-4">
                    {listRefToUse.map((item, index) => {
                      const isChecked = wantToUseList.some(
                        (sel) => sel.idx === item.idx
                      );
                      return (
                        <label
                          key={item.idx}
                          htmlFor={`wantUse${index}`}
                          className="w-full"
                        >
                          <div
                            className={`${
                              isChecked
                                ? 'relative border-[#792024] bg-white'
                                : 'border-[#E2E8F5]'
                            } flex border-2 rounded-lg py-3 px-4 cursor-pointer`}
                          > 
                            {isChecked && (
                              <FaCheckCircle
                                size={20}
                                className="absolute -top-4 -right-2 text-[#792024]"
                              />
                            )}

                            <input
                              id={`wantUse${index}`}
                              type="checkbox"
                              className="hidden"
                              checked={isChecked}
                              onChange={() => {
                                const already = wantToUseList.some(
                                  (sel) => sel.idx === item.idx
                                );
                                if (already) { 
                                  setWantToUseList((prev) =>
                                    prev.filter((sel) => sel.idx !== item.idx)
                                  );
                                } else { 
                                  setWantToUseList((prev) => [
                                    ...prev,
                                    { ...item, count: 1 },
                                  ]);
                                }
                              }}
                            />

                            <div className="flex-1">{item.textUse}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col w-3/12">
          <span className="text-xl">เอกสารทั้งหมดที่เลือก</span>
          <hr className="my-5" />

          <div className="space-y-4">
            {wantToUseList.length === 0 && (
              <p className="text-gray-500">ยังไม่มีรายการที่เลือก</p>
            )}

            {wantToUseList.map((item) => (
              <div key={item.idx} className="flex justify-between items-center">
                <span>{item.textUse}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateCount(item.idx, -1)}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-gray-700"
                  >
                    –
                  </button>
                  <span className="w-8 text-center">{item.count}</span>
                  <button
                    onClick={() => updateCount(item.idx, 1)}
                    className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
        <div className="flex justify-between mx-4">
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
          </div>
          <div className="flex basis-1/4 gap-4">
            <button
              className="bg-[#BBDEFB] text-[#0D47A1] hover:bg-[#0D47A1] hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span className="my-auto">บันทึกร่าง</span>
            </button>
            <button
              className="bg-[#ad9e71] text-white hover:bg-[#792024] w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
              onClick={(e) => {
                 router.push('/requestgazservice/paymentgazservicer');
              }}
            >
              <span className="my-auto">ดำเนินการต่อ</span>
            </button>
          </div>
        </div>
      </div>
    </LayoutAfterLogin>
  );
}

export default CreateGazServicer;
