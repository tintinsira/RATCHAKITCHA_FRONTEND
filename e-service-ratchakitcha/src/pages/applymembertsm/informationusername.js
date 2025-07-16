import React, { useState } from 'react';
import { useRouter } from 'next/router';
 
import { FaCheckCircle } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbMailForward, TbUserExclamation } from 'react-icons/tb';
 
import InputForm from '@/components/input/InputForm'; 
import LayoutBeforeLogin from '@/components/layout/layoutbeforelogin';
import StepApply from './stepapply';
import InputFileForm from '@/components/input/InputFileForm';

function Informationcontact() {

  const router = useRouter();
  const [typeChannelForgotPass, setTypeChannelForgotPass] = useState('');

  const [wantToUseList, setWantToUseList] = useState([]);
  const listRefToUse = [
    { idx: '1', textUse: 'ระบบขอรับสำเนาข้อมูลราชกิจจานุเบกษา' },
    { idx: '2', textUse: 'ระบบขอทราบวันเผยแพร่ราชกิจจานุเบกษา' },
    { idx: '3', textUse: 'ระบบค้นหาประกาศเกี่ยวกับการล้มละลาย' },
  ];

  const handleSubmit = async (e) => {
    router.push('informationconfirm');
  };

  const selectChannelForgotPass = (event) => {
    setTypeChannelForgotPass(event.target.value);
  };
  
  return (
    <>
      <LayoutBeforeLogin>
        <StepApply numStep={3} />
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">บัญชีผู้ใช้งาน</span>
          <hr className="mt-5 mb-0" />
          <div className="mt-8 w-1/2 mx-auto hidden">
            <span className="text-xl font-semibold">ต้องการใช้งานระบบ</span>
            <div>
              <small className="text-[#543FBF] mt-2">
                เลือกได้มากกว่า 1 อย่าง
              </small>
              <div
                name="listRefToUse"
                className="flex flex-col mt-5 mb-2 gap-4"
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
                            ? 'relative border-[#efece3] bg-[#ffff]'
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
          <hr className="w-1/2 mx-auto my-4 hidden" />
          <div className="mt-4 w-1/2 mx-auto">
            <InputFileForm
              name="logoFileId"
              refFucn={(ref) =>
                (inputRefs.current.logoFileId = { current: ref })
              }
              textSmall={
                'รูปภาพควรจะมีขนาดไม่เกิน 2 MB โดยสกุลไฟล์จะต้องเป็น jpeg,jpg,png เท่านั้น'
              }
              acceptedFileTypes={['image/png', 'image/jpeg']}
              onFileUploadSucceed={(dataRes) => {}}
              isDisable={false}
              isMultiple={false}
              errorMsg={''}
            />
          </div>

          <hr className="w-1/2 mx-auto mt-4" />
          <div className="mt-4 w-1/2 mx-auto">
            <span className="text-xl font-semibold">ตั้งค่ารหัสผ่าน</span>
            <div className="flex flex-row gap-4 w-full mt-4">
              <div className="basis-full ">
                <InputForm
                  lable="รหัสผ่าน (Password)"
                  type="text"
                  placeholder={`กรุณากรอก รหัสผ่าน (Password)`}
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
                  lable="ยืนยันรหัสผ่าน"
                  type="text"
                  placeholder={`กรุณากรอก ยืนยันรหัสผ่าน`}
                  name=""
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
              <div className="w-auto h-auto bg-[#ad9e71] rounded-xl mt-0 text-white">
                <div className="px-2 pt-1">
                  <div className="md:text-[1rem] text-sm  m-3">
                    รหัสผ่าน:
                    <br /> 1. มีความยาวตัวอักษรไม่ต่ำกว่า 8 ตัว <br />
                    2. รหัสผ่านต้องประกอบไปด้วย
                    <br />- ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่อย่างน้อย 1 ตัว
                    <br />- ตัวอักษรภาษาอังกฤษและตัวเลข
                  </div>
                </div>
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
                router.push('informationcontact');
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
