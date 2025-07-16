import React, { useState } from 'react'; 
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';
import InputForm from '@/components/input/InputForm';
 
import { BsSearch } from 'react-icons/bs'; 
import { MdFilterList } from 'react-icons/md'; 
import { PiFileMagnifyingGlassFill } from 'react-icons/pi';
import InputSelectFormTitle from '@/components/input/InputSelectFormTitle';
import DatepickerInput from '@/components/input/DatepickerInput';

function Home() {
  const router = useRouter();
  
  const [isShowFilter, setIsShowFilter] = useState(false);

  return (
    <>
      <LayoutAfterLogin>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">ค้นหาแบบฟอร์มระบบสมาชิก</span>
          <hr className="my-5" />
          <div className="w-3/4 flex flex-col mx-auto">
            <div className="w-full drop-shadow-md bg-white flex py-2 px-4 my-4 rounded-2xl gap-2">
              <div className="basis-[2%] flex">
                <span className="my-auto">
                  <BsSearch size={20} className="my-auto" />
                </span>
              </div>
              <div className="basis-[100%]">
                <input
                  type={'text'}
                  placeholder={'ค้นหาด้วย เลขบัตรประชาชน ชื่อ นามสกุล '}
                  name="searchNameQuery"
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad9e71]"
                />
              </div>
              {!isShowFilter && (
                <div className="basis-[20%] flex gap-2">
                  <button
                    className="bg-[#ad9e71] text-white hover:bg-[#792024] hover:text-white w-full py-2 rounded-3xl
                    hover:-translate-y-1 hover:scale-110
                    duration-200 transform"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <span className="my-auto">ค้นหา</span>
                  </button>
                  <button
                    className="bg-[#E6E9F5] text-[#543FBF] w-full py-2 rounded-3xl cursor-pointer 
                      hover:-translate-y-1 hover:scale-110
                      duration-200 transform"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <span className="my-auto">เริ่มใหม่</span>
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  setIsShowFilter(!isShowFilter);
                }}
                className="flex text-lg text-black"
              >
                <MdFilterList size={25} className="my-auto mr-2" />
                <span className="my-auto">ค้นหาแบบมีเงื่อนไข</span>
              </button>
            </div>
            {isShowFilter && (
              <>
                <div className="flex flex-row gap-4 w-full mt-8">
                  <div className="basis-1/3">
                    <InputForm
                      lable="อีเมล"
                      type="text"
                      placeholder={`กรุณาอีเมล`}
                      name=""
                      value={''}
                      onChange={(e) => {}}
                      isDisable={false}
                      isRequire={true}
                      textSmall={``}
                    />
                  </div>
                  <div className="basis-1/3">
                    <InputForm
                      lable="เบอร์โทรศัพท์"
                      type="text"
                      placeholder={`กรุณาเบอร์โทรศัพท์`}
                      name=""
                      value={''}
                      onChange={(e) => {}}
                      isDisable={false}
                      isRequire={true}
                      textSmall={``}
                    />
                  </div>
                  <div className="basis-1/3">
                    <InputSelectFormTitle
                      lable="สถานะ"
                      type="text"
                      placeholder={`กรุณาสถานะ`}
                      name=""
                      value={''}
                      onChange={(e) => {}}
                      isDisable={false}
                      isRequire={true}
                      textSmall={``}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-4 w-full mt-8">
                  <div className="basis-1/3">
                    <DatepickerInput
                      labelText="วัน/เดือน/ปี ที่สมัคร"
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
                <div className="flex w-3/12 mx-auto justify-center gap-4">
                  <button
                    className="bg-[#ad9e71] text-white hover:bg-[#792024] hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer
                    hover:-translate-y-1 hover:scale-110 duration-200 transform"
                    onClick={(e) => {}}
                  >
                    <span className="my-auto">ค้นหา</span>
                  </button>
                  <button
                    className="bg-[#E6E9F5] text-[#543FBF] w-1/2 py-2 my-4 rounded-3xl cursor-pointer 
                      hover:-translate-y-1 hover:scale-110 duration-200 transform"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <span className="my-auto">เริ่มใหม่</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">ข้อมูลแบบฟอร์มระบบสมาชิก</span>
          <div className="w-full">
            <table className="w-full min-w-full table-auto text-left border-separate border-spacing-y-4">
              <tbody>
                <tr className="bg-[#efece3] shadow-md gap-4">
                  <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                    1
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
                  <th className="px-1 py-2 rounded-e-xl w-[5%]">
                    <div className="flew justify-end">
                      <button
                        className="bg-[#E6E9F5] text-[#543FBF] hover:bg-[#543FBF]
                       hover:text-[#E6E9F5] flex p-2 rounded-md my-2 mx-auto cursor-pointer
                       border borer-[#543FBF] hover:border-none
                        "
                        onClick={(e) => { router.push('/member/viewdetailmember'); }}
                        data-title="ตรวจสอบ"
                      >
                        <span className="my-auto">
                          <PiFileMagnifyingGlassFill
                            size={20}
                            className="my-auto"
                          />
                        </span>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr className="bg-[#efece3] shadow-md gap-4">
                  <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                   2
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
                  <th className="px-1 py-2 rounded-e-xl w-[5%]">
                    <div className="flew justify-end">
                      <button
                        className="bg-[#E6E9F5] text-[#543FBF] hover:bg-[#543FBF]
                       hover:text-[#E6E9F5] flex p-2 rounded-md my-2 mx-auto cursor-pointer
                       border borer-[#543FBF] hover:border-none
                        "
                        onClick={(e) => { router.push('/member/viewdetailmember'); }}
                        data-title="ตรวจสอบ"
                      >
                        <span className="my-auto">
                          <PiFileMagnifyingGlassFill
                            size={20}
                            className="my-auto"
                          />
                        </span>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr className="bg-[#efece3] shadow-md gap-4">
                  <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                    3
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
                  <th className="px-1 py-2 rounded-e-xl w-[5%]">
                    <div className="flew justify-end">
                      <button
                        className="bg-[#E6E9F5] text-[#543FBF] hover:bg-[#543FBF]
                       hover:text-[#E6E9F5] flex p-2 rounded-md my-2 mx-auto cursor-pointer
                       border borer-[#543FBF] hover:border-none "
                        onClick={(e) => { 
                          router.push('/member/viewdetailmember'); 
                        }}
                        data-title="ตรวจสอบ"
                      >
                        <span className="my-auto">
                          <PiFileMagnifyingGlassFill
                            size={20}
                            className="my-auto"
                          />
                        </span>
                      </button>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LayoutAfterLogin>
    </>
  );
}

export default Home;
