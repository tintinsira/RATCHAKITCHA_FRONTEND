import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';
import { BsBank, BsCreditCard, BsQrCode } from 'react-icons/bs';
import StepCreateGazService from './stepcreategazservice';
import Image from 'next/image';

function PaymentGazServicer() {
  const router = useRouter();

  const [selectCHPay, setSelectCHPay] = useState('');

  const [wantToUseList, setWantToUseList] = useState([
    { idx: '1', textUse: 'ขอสำเนาที่มีผู้รับรอง', count: 1 },
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
            <div className="flex flex-col">
              <label htmlFor={`qrpayment`} className="w-full">
                <div
                  className={`${
                    selectCHPay === 'qr'
                      ? 'relative border-[#792024] bg-[#792024] border-b-0 rounded-t-lg text-white'
                      : 'border-[#E2E8F5] bg-white rounded-lg text-[#792024]'
                  } border-2  py-3 px-4 cursor-pointer`}
                >
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
                    <span>Thai QR</span>
                    <span>
                      <BsQrCode size={30} />
                    </span>
                  </div>
                </div>
              </label>
              {selectCHPay === 'qr' && (
                <>
                  <div className="py-8 px-8 shadow-lg rounded-b-xl border-2 border-t-0 border-[#792024] flex flex-col w-full bg-[#efece3] ">
                    <Image
                      aria-hidden
                      src="/images/qrcode.png"
                      alt="qrcode"
                      width={300}
                      height={75}
                      className="mx-auto"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor={`creditCard`} className="w-full">
                <div
                  className={`${
                    selectCHPay === 'cc'
                      ? 'relative border-[#792024] bg-[#792024] border-b-0 rounded-t-lg text-white'
                      : 'border-[#E2E8F5] bg-white rounded-lg text-[#792024]'
                  } border-2  py-3 px-4 cursor-pointer`}
                >
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
              {selectCHPay === 'cc' && (
                <>
                  <div className="py-8 px-8 shadow-lg rounded-b-xl border-2 border-t-0 border-[#792024] flex flex-col w-full bg-[#efece3]">
                    <div className="flex flex-row gap-4">
                      <div>
                        <Image
                          aria-hidden
                          src="/images/Visa.png"
                          alt="Visa"
                          width={150}
                          height={75}
                          className="mx-auto"
                        />
                      </div>
                      <div>
                        <Image
                          aria-hidden
                          src="/images/Maestro.png"
                          alt="Maestro"
                          width={150}
                          height={75}
                          className="mx-auto"
                        />
                      </div>
                      <div>
                        <Image
                          aria-hidden
                          src="/images/Unionpay.png"
                          alt="Unionpay"
                          width={150}
                          height={75}
                          className="mx-auto"
                        />
                      </div>
                      <div>
                        <Image
                          aria-hidden
                          src="/images/JCB.png"
                          alt="JCB"
                          width={150}
                          height={75}
                          className="mx-auto"
                        />
                      </div>
                      <div>
                        <Image
                          aria-hidden
                          src="/images/Thai_payment.png"
                          alt="Thai_payment"
                          width={150}
                          height={75}
                          className="mx-auto"
                        />
                      </div>
                    </div>
                    <span className="font-semibold mt-2">
                      หมายเหตุ: อัตราค่าธรรมเนียมการใช้บัตรเครดิต/เดบิต
                      ผ่านช่องทาง Internet Payment Gateway
                    </span>
                    <div className="flex flex-col gap-2 mt-4">
                      <span className="ml-4">
                        - บัตรเครดิต/เดบิต Visa, Mastercard
                        ที่ออกในประเทศไทยทุกประเภทบัตร — ค่าธรรมเนียม 1.30%
                      </span>
                      <span className="ml-4">
                        - บัตรเครดิต/เดบิต UnionPay, TPN ทุกประเภทบัตร —
                        ค่าธรรมเนียม 1.30%
                      </span>
                      <span className="ml-4">
                        - บัตรเครดิต/เดบิต Visa, Mastercard
                        ที่ออกต่างประเทศทุกประเภทบัตร — ค่าธรรมเนียม 2.00%
                      </span>
                      <span className="ml-4">
                        - บัตร JCB ทุกประเภท — ค่าธรรมเนียม 2.00%
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor={`other`} className="w-full">
                <div
                  className={`${
                    selectCHPay === 'ot'
                      ? 'relative border-[#792024] bg-[#792024] border-b-0 rounded-t-lg text-white'
                      : 'border-[#E2E8F5] bg-white rounded-lg text-[#792024]'
                  } border-2  py-3 px-4 cursor-pointer`}
                >
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
              {selectCHPay === 'ot' && (
                <>
                  <div className="py-8 px-8 shadow-lg rounded-b-xl border-2 border-t-0 border-[#792024] flex flex-col w-full bg-[#efece3]">
                    <div className="flex flex-row gap-4 justify-between">
                      <div className="bg-[#4e2e7f] rounded-3xl p-4 text-white justify-center text-center flex flex-col w-3/12">
                        <div className="mb-2">
                          <Image
                            aria-hidden
                            src="/images/iconbank/scb.svg"
                            alt="scb"
                            width={75}
                            height={75}
                            className="mx-auto"
                          />
                        </div>
                        <span className="text-xl">SCB</span>
                        <span className="text-lg">ธนาคารไทยพาณิชย์</span>
                      </div>
                      <div className="bg-[#1aa5e1] rounded-3xl p-4 text-white justify-center text-center flex flex-col w-3/12">
                        <div className="mb-2">
                          <Image
                            aria-hidden
                            src="/images/iconbank/ktb.svg"
                            alt="scb"
                            width={75}
                            height={75}
                            className="mx-auto"
                          />
                        </div>
                        <span className="text-xl">KTB</span>
                        <span className="text-lg">ธนาคารกรุงไทย</span>
                      </div>
                      <div className="bg-[#128f2d] rounded-3xl p-4 text-white justify-center text-center flex flex-col w-3/12">
                        <div className="mb-2">
                          <Image
                            aria-hidden
                            src="/images/iconbank/kbank.svg"
                            alt="scb"
                            width={75}
                            height={75}
                            className="mx-auto"
                          />
                        </div>
                        <span className="text-xl">KBANK</span>
                        <span className="text-lg">ธนาคารกสิกรไทย</span>
                      </div>
                      <div className="bg-[#1e4598] rounded-3xl p-4 text-white justify-center text-center flex flex-col w-3/12">
                        <div className="mb-2">
                          <Image
                            aria-hidden
                            src="/images/iconbank/bbl.svg"
                            alt="scb"
                            width={75}
                            height={75}
                            className="mx-auto"
                          />
                        </div>
                        <span className="text-xl">BBL</span>
                        <span className="text-lg">ธนาคารกรุงเทพ</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="my-4 pb-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col w-3/12 h-fit">
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
          <hr className="my-5" />
          <div className="flex justify-between mx-4">
            <div className="flex gap-4">
              <button
                className="bg-gray-300 text-black hover:bg-gray-500 hover:text-white w-full h-fit py-2 px-4 rounded-3xl my-4 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  router.back();
                }}
              >
                <span className="my-auto">ย้อนกลับ</span>
              </button>
            </div>
            {selectCHPay !== '' && (
              <div className="flex basis-1/4 gap-4">
                <button
                  className="bg-[#ad9e71] text-white hover:bg-[#792024] w-full h-fit py-2 px-4 rounded-3xl my-4 cursor-pointer"
                  onClick={(e) => {
                    router.push('/requestgazservice/succeedgazservicer');
                  }}
                >
                  <span className="my-auto">ชำระเงิน</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutAfterLogin>
  );
}

export default PaymentGazServicer;
