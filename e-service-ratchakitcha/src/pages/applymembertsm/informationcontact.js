import React from 'react';
import { useRouter } from 'next/router';
import { FaRegAddressCard } from 'react-icons/fa';

import DatepickerInput from '@/components/input/DatepickerInput';
import InputForm from '@/components/input/InputForm';
import InputSelectFormTitle from '@/components/input/InputSelectFormTitle';  
import LayoutBeforeLogin from '@/components/layout/layoutbeforelogin';
import StepApply from './stepapply';

function Informationcontact() {

  const router = useRouter();

  const handleSubmit = async (e) => {
    router.push('informationusername');
  };
  
  return (
    <>
      <LayoutBeforeLogin>
        <StepApply numStep={2} />
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">ข้อมูลการติดต่อ</span>
          <hr className="mt-5 mb-0" />
          <div className="mt-8">
            <div className="flex flex-row gap-4 w-full">
              <div className="basis-3/4">
                <InputForm
                  lable="เลขที่, ชั้น, อาคาร, หมู่บ้าน"
                  type="text"
                  placeholder={`กรุณากรอก เลขที่, ชั้น, อาคาร, หมู่บ้าน`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full mt-4">
              <div className="basis-full ">
                <InputForm
                  lable="หมู่ที่"
                  type="text"
                  placeholder={`กรุณากรอกหมู่ที่`}
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
                  lable="ตรอก"
                  type="text"
                  placeholder={`กรุณากรอกตรอก`}
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
                  lable="ซอย"
                  type="text"
                  placeholder={`กรุณากรอกซอย`}
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
                  lable="ถนน"
                  type="text"
                  placeholder={`กรุณากรอกถนน`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full mt-4">
              <div className="basis-full ">
                <InputSelectFormTitle
                  lable="ตำบล"
                  type="text"
                  placeholder={`กรุณากรอกตำบล`}
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
                  lable="อำเภอ"
                  type="text"
                  placeholder={`กรุณากรอกอำเภอ`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={true}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-full ">
                <InputForm
                  lable="จังหวัด"
                  type="text"
                  placeholder={`กรุณากรอกจังหวัด`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={true}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-full ">
                <InputForm
                  lable="ไปรษณีย์"
                  type="text"
                  placeholder={`กรุณากรอกไปรษณีย์`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={true}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full mt-4">
              <div className="basis-3/12">
                <InputForm
                  lable="เบอร์โทรศัพท์"
                  type="text"
                  placeholder={`กรุณากรอกเบอร์โทรศัพท์`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-3/12">
                <InputForm
                  lable="อีเมล"
                  type="text"
                  placeholder={`กรุณากรอกอีเมล`}
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
                router.push('informationperson');
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
      </LayoutBeforeLogin>
    </>
  );
}

export default Informationcontact;
