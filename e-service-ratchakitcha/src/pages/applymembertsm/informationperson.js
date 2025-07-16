import React from 'react';
import { useRouter } from 'next/router';
import { FaRegAddressCard } from 'react-icons/fa';

import DatepickerInput from '@/components/input/DatepickerInput';
import InputForm from '@/components/input/InputForm';
import InputSelectFormTitle from '@/components/input/InputSelectFormTitle';  
import LayoutBeforeLogin from '@/components/layout/layoutbeforelogin';
import StepApply from './stepapply';

function Informationperson() { 
  const router = useRouter();

  const handleSubmit = async (e) => {
    router.push('informationcontact');
  };
  return (
    <>
      <LayoutBeforeLogin>
        <StepApply numStep={1} />
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">ข้อมูลสมาชิก</span>
          <hr className="mt-5 mb-0" />
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-row gap-4 w-full ">
              <div className="basis-full ">
                <InputForm
                  lable="เลขบัตรประชาชน"
                  type="text"
                  placeholder={`กรุณาเลขบัตรประชาชน`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-full ">
                <InputForm
                  lable="รหัสหลังบัตรประจำตัวประชาชน"
                  type="text"
                  placeholder={`กรุณากรอกรหัสหลังบัตรประจำตัวประชาชน`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-full ">
                <DatepickerInput
                  labelText="วัน/เดือน/ปี เกิด"
                  placeholder={`วว/ดด/ปป`}
                  name="birthday"
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full">
              <div className="basis-full ">
                <InputSelectFormTitle
                  lable="คำนำหน้าชื่อภาษาไทย"
                  type="text"
                  placeholder={`กรุณากรอกคำนำหน้าชื่อภาษาไทย`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-full ">
                <InputForm
                  lable="ชื่อภาษาไทย"
                  type="text"
                  placeholder={`กรุณากรอกชื่อภาษาไทย`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-full ">
                <InputForm
                  lable="นามสกุลภาษาไทย"
                  type="text"
                  placeholder={`กรุณากรอกนามสกุลภาษาไทย`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full">
              <div className="basis-full ">
                <InputForm
                  lable="ชื่อภาษาอังกฤษ"
                  type="text"
                  placeholder={`กรุณากรอกชื่อภาษาอังกฤษ`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-full ">
                <InputForm
                  lable="นามสกุลภาษาอังกฤษ"
                  type="text"
                  placeholder={`กรุณากรอกนามสกุลภาษาอังกฤษ`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-full ">
                <InputSelectFormTitle
                  lable="เพศ"
                  type="text"
                  placeholder={`กรุณากรอกเพศ`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
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
              }}
            >
              <span className="my-auto">กลับหน้าหลัก</span>
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
      </LayoutBeforeLogin>
    </>
  );
}

export default Informationperson;
