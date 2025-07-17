import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';
import { BsSearch } from 'react-icons/bs';
import { MdCreateNewFolder } from 'react-icons/md'; 
import StepCreateGazService from './stepcreategazservice';
import Image from 'next/image';

function SucceedGazServicer() {
  const router = useRouter(); 

  return (
    <LayoutAfterLogin>
      <StepCreateGazService numStep={4} />

      <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
        <span className="text-xl">เสร็จสิ้นรายการ</span>
        <hr className="my-5" />
        <div className="w-3/4 flex flex-row mx-auto">
          <div className="w-1/2">
            <Image
              aria-hidden
              src="/images/successfulpay.svg"
              alt="successfulpay"
              width={800}
              height={75}
              className="mx-auto"
            />
          </div>
          <div className="w-1/2 py-8 px-12 flex flex-col gap-8">
            <div className="flex flex-row ">
              <span className="font-semibold basis-1/2">หมายเลขคำขอ :</span>
              <span className="ml-4 text-start"> @FORM123456789 </span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold basis-1/2 ">ชื่อผู้ใช้ :</span>
              <span className="ml-4 text-start"> ทดสอบ ระบบ</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold basis-1/2 ">
                จำนวนเงินที่ชำระ :
              </span>
              <span className="ml-4 text-start"> 1090.00 บาท</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold basis-1/2 ">วิธีการจัดส่ง :</span>
              <span className="ml-4 text-start"> อิเล็กทรอนิกส์</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold basis-1/2 ">ทำรายการเมื่อ :</span>
              <span className="ml-4 text-start"> 17/07/2568 11:14:57 น.</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold basis-1/2 ">ช่องทางการชำระ :</span>
              <span className="ml-4 text-start"> Thai QR</span>
            </div>
            <div className="flex flex-row">
              <span className="font-semibold basis-1/2 ">
                สถานะการชำระเงิน :
              </span>
              <span className="ml-4 text-start">สำเร็จ</span>
            </div>
            <div className="my-4 rounded-xl border border-[#efece3] flex flex-col">
              <div className="flex justify-center mx-4">
                <div className="flex basis-full gap-4">
                  <button
                    className="bg-gray-300 text-black hover:bg-gray-500 hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <span className="my-auto">กลับหน้าหลัก</span>
                  </button>
                  <button
                    className="bg-[#ad9e71] text-white hover:bg-[#792024] w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
                    onClick={(e) => {
                      router.push('/requestgazservice/listrequestgazser');
                    }}
                  >
                    <span className="my-auto">ติดตามสถานะ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAfterLogin>
  );
}

export default SucceedGazServicer;
