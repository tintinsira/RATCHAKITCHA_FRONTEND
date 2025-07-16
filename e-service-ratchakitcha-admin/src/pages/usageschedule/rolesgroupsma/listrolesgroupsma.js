import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';
import InputForm from '@/components/input/InputForm';

import { BsSearch } from 'react-icons/bs'; 
import { PiFileMagnifyingGlassFill } from 'react-icons/pi'; 
import { RiDeleteBin6Fill } from 'react-icons/ri'; 

function ListRolesGroupsMA() {
  const router = useRouter();

  const [openAddGroupModal, setOpenAddGroupModal] = useState(false);

  return (
    <>
      <LayoutAfterLogin>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">กำหนดประเภทสมาชิก / จัดกลุ่มสมาชิก</span>
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
                  placeholder={'ค้นหาด้วย ชื่อกลุ่มสมาชิก '}
                  name="searchNameQuery"
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad9e71]"
                />
              </div>
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
            </div>
          </div>
        </div>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <div className="flex justify-between">
            <span className="text-xl">ข้อมูลกลุ่มสมาชิก</span>
            <button
              className="bg-[#E6E9F5] text-[#543FBF] w-[10%] py-2 rounded-3xl cursor-pointer 
                      hover:-translate-y-1 hover:scale-110
                      duration-200 transform"
              onClick={(e) => {
                e.preventDefault();
                router.push('/usageschedule/rolesgroupsma/rolsegroupdetail');
              }}
            >
              <span className="my-auto">เพิ่มกลุ่มสมาชิก</span>
            </button>
          </div>
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
                    <div className="flex flex-row gap-3 justify-end">
                      <button
                        className="bg-[#E6E9F5] text-[#543FBF] hover:bg-[#543FBF]
                       hover:text-[#E6E9F5] flex p-2 rounded-md my-2 cursor-pointer
                       border borer-[#543FBF] hover:border-none
                        "
                        onClick={(e) => {
                          router.push('/member/viewdetailmember?typemember=Y');
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
                      <button
                        className="bg-gray-100 text-gray-700 hover:bg-gray-300
                            hover:text-black flex p-2 rounded-md my-2 cursor-pointer
                            border border-gray-300 hover:border-gray-700 items-center
                        "
                        onClick={(e) => {
                          router.push('/member/viewdetailmember?typemember=Y');
                        }}
                        data-title="ลบ"
                      >
                        <span className="my-auto">
                          <RiDeleteBin6Fill size={20} />
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
                    <div className="flex flex-row gap-3 justify-end">
                      <button
                        className="bg-[#E6E9F5] text-[#543FBF] hover:bg-[#543FBF]
                       hover:text-[#E6E9F5] flex p-2 rounded-md my-2 cursor-pointer
                       border borer-[#543FBF] hover:border-none
                        "
                        onClick={(e) => {
                          router.push('/member/viewdetailmember?typemember=Y');
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
                      <button
                        className="bg-gray-100 text-gray-700 hover:bg-gray-300
                            hover:text-black flex p-2 rounded-md my-2 cursor-pointer
                            border border-gray-300 hover:border-gray-700 items-center
                        "
                        onClick={(e) => {
                          router.push('/member/viewdetailmember?typemember=Y');
                        }}
                        data-title="ลบ"
                      >
                        <span className="my-auto">
                          <RiDeleteBin6Fill size={20} />
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
                    <div className="flex flex-row gap-3 justify-end">
                      <button
                        className="bg-[#E6E9F5] text-[#543FBF] hover:bg-[#543FBF]
                       hover:text-[#E6E9F5] flex p-2 rounded-md my-2 cursor-pointer
                       border borer-[#543FBF] hover:border-none
                        "
                        onClick={(e) => {
                          router.push('/member/viewdetailmember?typemember=Y');
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
                      <button
                        className="bg-gray-100 text-gray-700 hover:bg-gray-300
                            hover:text-black flex p-2 rounded-md my-2 cursor-pointer
                            border border-gray-300 hover:border-gray-700 items-center
                        "
                        onClick={(e) => {
                          router.push('/member/viewdetailmember?typemember=Y');
                        }}
                        data-title="ลบ"
                      >
                        <span className="my-auto">
                          <RiDeleteBin6Fill size={20} />
                        </span>
                      </button>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {openAddGroupModal && (
          <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-filter backdrop-blur-sm">
              <div className="bg-[#efece3] p-6 rounded-3xl shadow-lg w-[650px]">
                <div className="flex text-start justify-start mb-4">
                  <span className="text-2xl text-black">เพื่มกลุ่มสมาชิก</span>
                </div>
                <hr className="mt-4 mb-6" />

                <div className="flex flex-col text-start justify-start mb-4">
                  <InputForm
                    lable="ชื่อกลุ่ม"
                    type="text"
                    placeholder={`กรุณากรอกชื่อกลุ่ม`}
                    name=""
                    value={''}
                    onChange={(e) => {}}
                    isDisable={false}
                    isRequire={true}
                    textSmall={``}
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-green-500 text-white py-2 px-8 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenAddGroupModal(false);
                    }}
                  >
                    ดำเนินการยืนยันตัวตน
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </LayoutAfterLogin>
    </>
  );
}

export default ListRolesGroupsMA;
