import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import LayoutAfterLogin from '@/components/layout/layoutafterlogin'; 
import Image from 'next/image';
import InputSelectFormTitle from '@/components/input/InputSelectFormTitle';
import InputForm from '@/components/input/InputForm';
import DatepickerInput from '@/components/input/DatepickerInput';

function ViewDetailMember() {
const router = useRouter(); 
  
  const { typemember } = router.query;
  const [isShowFilter, setIsShowFilter] = useState(false);

  return (
    <>
      <LayoutAfterLogin>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <label className="flex justify-between">
            <span className="text-xl">ข้อมูลสมาชิก</span>
            {typemember !== 'Y' && (
              <span className="text-xl text-[#792024]">
                เลขที่ใบสมัคร : #FORM123456789
              </span>
            )}
          </label>
          <hr className="my-5" />
          <div className="w-full flex flex-col mx-auto">
            <div className="mt-4 w-full mx-auto gap-2 flex flex-col border-[#efece3] border shadow-lg rounded-xl px-4 py-2">
              <span className="text-xl">ข้อมูลทั่วไป</span>
              <hr />
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
            <div className="mt-4 w-full mx-auto gap-2 flex flex-col border-[#efece3] border shadow-lg rounded-xl px-4 py-2">
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
            {typemember === 'Y' ? (
              <></>
            ) : (
              <>
                <div className="mt-8 w-full mx-auto gap-2 flex flex-col border-[#efece3] border shadow-lg rounded-xl px-4 py-2">
                  <span className="text-xl">เอกสารที่แนบเข้ามา</span>
                  <hr />
                  <div className="flex w-3/12 justify-between my-4">
                    <div className="flex">
                      <Image
                        src={'/images/pdfImg.png'}
                        alt="File Preview"
                        width={600}
                        height={300}
                        className="m-auto w-auto h-auto"
                      />
                      <div className="flex flex-col ml-4">
                        <span>test.pdf</span>
                        <span className="text-[#C2C2C2]"></span>
                      </div>
                    </div>
                    <div className={`my-auto flex flex-col`}>
                      <button className="bg-purple-400 text-white rounded-md px-3 py-1 font-medium hover:bg-purple-300 cursor-pointer">
                        ดูไฟล์
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
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
                className="bg-[#ad9e71] text-[#792024] hover:bg-[#792024] hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
                onClick={(e) => {}}
              >
                <span className="my-auto">ยกเลิก</span>
              </button>
              <button
                className="bg-[#A7D9B4] text-[#2F4F4F] hover:bg-[#8CC49C] hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
                onClick={(e) => {}}
              >
                <span className="my-auto">
                  {typemember !== 'Y' ? <>อนุมัติ</> : <>บันทึก</>}
                </span>
              </button>
            </div>
          </div>
        </div>
      </LayoutAfterLogin>
    </>
  );
}

export default ViewDetailMember;
