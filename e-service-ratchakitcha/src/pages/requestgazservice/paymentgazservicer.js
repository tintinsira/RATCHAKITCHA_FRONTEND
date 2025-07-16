import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin'; 
import { FaCheckCircle } from 'react-icons/fa';
import { BsBank, BsCreditCard, BsQrCode } from 'react-icons/bs';
import StepCreateGazService from './stepcreategazservice';

function PaymentGazServicer() {
  const router = useRouter();
 
 const [selectCHPay, setSelectCHPay] = useState('');

  const [wantToUseList, setWantToUseList] = useState([
    { idx: '1', textUse: 'ขอสำเนาที่มีผู้รับรอง' ,count : 1},
    { idx: '2', textUse: 'ขอสำเนาที่มีผู้รับรอง2', count: 2 },
    { idx: '3', textUse: 'ขอสำเนาที่มีผู้รับรอง3', count: 1 },
  ]);
 
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
      <StepCreateGazService numStep={3} />

      <div className="flex gap-4">
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col w-3/4">
          <span className="text-xl">ช่องทางการชำระเงิน</span>
          <hr className="my-5" />

          <div className="w-3/4 flex flex-col mx-auto gap-4 mt-8">
            <label htmlFor={`qrpayment`} className="w-full">
              <div
                className={`${
                  selectCHPay === 'qr'
                    ? 'relative border-[#792024] bg-white'
                    : 'border-[#E2E8F5]'
                } border-2 rounded-lg py-3 px-4 cursor-pointer`}
              >
                {selectCHPay === 'qr' && (
                  <FaCheckCircle
                    size={20}
                    className="absolute -top-4 -right-2 text-[#792024]"
                  />
                )}

                <input
                  id={`qrpayment`}
                  type="checkbox"
                  className="hidden"
                  checked={selectCHPay === 'qr'}
                  onChange={() => {
                    setSelectCHPay('qr');
                  }}
                />

                <div className="flex justify-between">
                  <span>บัตรเครดิต / บัตรเดบิต</span>
                  <span>
                    <BsQrCode size={30} />
                  </span>
                </div>
              </div>
            </label>
            <label htmlFor={`creditCard`} className="w-full">
              <div
                className={`${
                  selectCHPay === 'cc'
                    ? 'relative border-[#792024] bg-white'
                    : 'border-[#E2E8F5]'
                } border-2 rounded-lg py-3 px-4 cursor-pointer`}
              >
                {selectCHPay === 'cc' && (
                  <FaCheckCircle
                    size={20}
                    className="absolute -top-4 -right-2 text-[#792024]"
                  />
                )}

                <input
                  id={`creditCard`}
                  type="checkbox"
                  className="hidden"
                  checked={selectCHPay === 'cc'}
                  onChange={() => {
                    setSelectCHPay('cc');
                  }}
                />

                <div className="flex justify-between">
                  <span>บัตรเครดิต / บัตรเดบิต</span>
                  <span>
                    <BsCreditCard size={30} />
                  </span>
                </div>
              </div>
            </label>
            <label htmlFor={`other`} className="w-full">
              <div
                className={`${
                  selectCHPay === 'ot'
                    ? 'relative border-[#792024] bg-white'
                    : 'border-[#E2E8F5]'
                } border-2 rounded-lg py-3 px-4 cursor-pointer w-full`}
              >
                {selectCHPay === 'ot' && (
                  <FaCheckCircle
                    size={20}
                    className="absolute -top-4 -right-2 text-[#792024]"
                  />
                )}

                <input
                  id={`other`}
                  type="checkbox"
                  className="hidden"
                  checked={selectCHPay === 'ot'}
                  onChange={() => {
                    setSelectCHPay('ot');
                  }}
                />

                <div className="flex justify-between">
                  <span>เคาร์เตอร์/ATM/Internet Banking</span>
                  <span>
                    <BsBank size={30} />
                  </span>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="my-4 pb-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col w-3/12">
          <div className="basis-full text-center text-xl bg-[#792024] text-white rounded-t-xl py-6">
            สรุปรายการ
          </div>
          <div className="px-8">
            <div className="basis-full text-lg mt-5">
              <span className="font-semibold">เรื่องที่ต้องการขอข้อมูล</span>
              <div className="flex">
                <span className="w-full ml-4">- ขอใช้งานการทดสอบระบบ</span>
              </div>
            </div>
            <hr className="my-5" />
            <span className="text-lg font-semibold">เอกสารทั้งหมดที่เลือก</span>
            <div className="space-y-4 mt-5">
              {wantToUseList.map((item) => (
                <div
                  key={item.idx}
                  className="flex justify-between items-center"
                >
                  <span>{item.textUse}</span>
                  <div className="flex items-center space-x-2">
                    <span className="w-8 text-center">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-5" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="font-semibold">ค่าจัดส่งรวม :</span>
                <span className="ml-4"> 120.00 บาท</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">ค่าธรรมเนียมรวม :</span>
                <span className="ml-4"> 900.00 บาท</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="">รวมทั้งสิ้น :</span>
                <span className="ml-4 text-[#792024]"> 1020.00 บาท</span>
              </div>
            </div>
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

export default PaymentGazServicer;
