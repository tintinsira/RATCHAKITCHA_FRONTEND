import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import LayoutBeforeLogin from '@/components/layout/layoutbeforelogin';
import StepApply from './stepapply';

function Informationcontact() {

  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false); 
  };

  const handleSubmit = async (e) => {
    openModal();
  };
  
  return (
    <>
      <LayoutBeforeLogin>
        <StepApply numStep={4} />
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">ยืนยันการส่งข้อมูล</span>
          <hr className="mt-5 mb-0" />
          <div className="mt-4 w-3/4 mx-auto gap-2 flex flex-col border-[#efece3] border shadow-lg rounded-xl px-4 py-2">
            <span className="text-xl">ข้อมูลทั่วไป</span>
            <hr />
            <div className="flex flex-row gap-4 mt-4">
              <div className="flex flex-row basis-2/6">
                <span className="font-semibold mr-2">
                  เลขประจำตัวประชาชน 13 หลัก :
                </span>
                <p>11X2XXXXXX23</p>
              </div>
              <div className="flex flex-row basis-2/6">
                <span className="font-semibold mr-2">
                  ชื่อ - สกุล ภาษาไทย :
                </span>
                <p>นายทดสอบ ระบบ</p>
              </div>
              <div className="flex flex-row basis-2/6">
                <span className="font-semibold mr-2">
                  ชื่อ - สกุล ภาษาอังกฤษ :
                </span>
                <p>MR. TEST SYSTEM</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <div className="flex flex-row basis-2/6">
                <span className="font-semibold mr-2">
                  วัน-เดือน-ปีเกิด(พ.ศ.) :
                </span>
                <p>22/11/2533</p>
              </div>
              <div className="flex flex-row basis-2/6">
                <span className="font-semibold mr-2">เพศ :</span>
                <p>ชาย</p>
              </div>
            </div>
          </div>
          <div className="mt-8 w-3/4 mx-auto gap-2 flex flex-col border-[#efece3] border shadow-lg rounded-xl px-4 py-2">
            <span className="text-xl">
              ข้อมูลการติดต่อ และที่อยู่ที่ติดต่อได้
            </span>
            <hr />
            <div className="flex flex-row gap-4 mt-4">
              <div className="flex flex-row basis-full">
                <span className="font-semibold mr-2">
                  รายละเอียดที่อยู่ที่ติดต่อได้ :
                </span>
                <p>
                  545 ถนนนครไชยศรี ถนนนครไชยศรี ดุสิต กรุงเทพมหานคร
                  10300
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <div className="flex flex-row basis-2/6">
                <span className="font-semibold mr-2">โทรศัพท์มือถือ :</span>
                <p>022809000</p>
              </div>
              <div className="flex flex-row basis-2/6">
                <span className="font-semibold mr-2">อีเมล :</span>
                <p>xyx@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-4">
          <div className="flex basis-1/4 gap-4">
            <button
              className="bg-gray-300 text-black hover:bg-gray-500 hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                router.push('informationusername');
              }}
            >
              <span className="my-auto">ย้อนกลับ</span>
            </button>
            <button
              className="bg-[#ad9e71] text-[#792024] hover:bg-[#792024] hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <span className="my-auto">ดำเนินการต่อ</span>
            </button>
          </div>
        </div>
        {isModalOpen && (
          <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-[#efece3] p-6 rounded-3xl shadow-lg w-[450px]">
                <div className="flex text-center justify-center mb-4">
                  <span className="text-2xl text-black">ลงทะเบียนสำเร็จ</span>
                </div>
                <div className="flex flex-col text-center justify-center mb-4">
                  <span className="text-md text-black">เลขที่ใบสมัคร</span>
                  <span className="text-xl font-semibold text-black mt-4">
                    #FORM123456789
                  </span>
                </div>
                <div className="flex flex-col text-center justify-center mb-4">
                  <span className="text-md text-black">
                    เพื่อประสบการณ์ในการใช้งานที่สมบูรณ์ <br />
                    ควรยืนยันตัวตนผ่านระบบยืนยันตัวตนดิจิทัล <br />
                    หรือสามารถยืนยันได้ในภายหลัง
                  </span>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-green-500 text-white py-2 px-8 rounded-full cursor-pointer"
                    onClick={(e) => {
                      router.push('/login');
                    }}
                  > ดำเนินการยืนยันตัวตน
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </LayoutBeforeLogin>
    </>
  );
}

export default Informationcontact;
