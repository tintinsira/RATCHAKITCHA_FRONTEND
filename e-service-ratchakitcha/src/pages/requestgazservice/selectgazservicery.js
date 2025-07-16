import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';
import InputForm from '@/components/input/InputForm';

import { BsSearch } from 'react-icons/bs';
import { LuFileSearch, LuFileCog } from 'react-icons/lu';
import {
  MdFilterList,
  MdEditDocument,
  MdCreateNewFolder,
  MdOutlinePayment,
} from 'react-icons/md';
import { PiFileMagnifyingGlassFill } from 'react-icons/pi';
import { RiDraftFill } from 'react-icons/ri';

import InputSelectFormTitle from '@/components/input/InputSelectFormTitle';
import DatepickerInput from '@/components/input/DatepickerInput';
import Paginator from '@/components/paginator/Paginator';
import StepCreateGazService from './stepcreategazservice';

function SelectGazServicer() {
  const router = useRouter();

  const [isShowFilter, setIsShowFilter] = useState(false);

  return (
    <>
      <LayoutAfterLogin>
        <StepCreateGazService numStep={1} />
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">
            สร้างคำร้องขอรับบริการข้อมูลราชกิจจานุเบกษา(สืบค้นเอกสาร)
          </span>
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
                  placeholder={'ค้นหาระบุชื่อเรื่อง/ประเภทราชกิจจานุเบกษา'}
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
          </div>
        </div>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <div className="flex justify-between">
            <span className="text-xl">รายการที่สืบค้น</span>
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
                      <span className="font-semibold mr-2">เรื่อง : </span>
                      <p>ขอใช้งานการทดสอบระบบ</p>
                    </label>
                  </th>

                  <th className="px-1 py-2 rounded-e-xl w-[5%]">
                    <div className="flex justify-center">
                      <button
                        className="bg-[#BBDEFB] text-[#0D47A1] hover:bg-[#0D47A1]
                       hover:text-white flex p-2 rounded-md my-2 cursor-pointer 
                        "
                        onClick={(e) => {
                          router.push('/requestgazservice/creategazservicer');
                        }}
                        data-title="สร้างคำขอ"
                      >
                        <span className="my-auto">
                          <MdCreateNewFolder size={20} className="my-auto" />
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
                      <span className="font-semibold mr-2">เรื่อง : </span>
                      <p>ขอใช้งานการทดสอบระบบ</p>
                    </label>
                  </th>

                  <th className="px-1 py-2 rounded-e-xl w-[5%]">
                    <div className="flex justify-center">
                      <button
                        className="bg-[#BBDEFB] text-[#0D47A1] hover:bg-[#0D47A1]
                       hover:text-white flex p-2 rounded-md my-2 cursor-pointer 
                        "
                        onClick={(e) => {
                          router.push('/requestgazservice/creategazservicer');
                        }}
                        data-title="สร้างคำขอ"
                      >
                        <span className="my-auto">
                          <MdCreateNewFolder size={20} className="my-auto" />
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
                      <span className="font-semibold mr-2">เรื่อง : </span>
                      <p>ขอใช้งานการทดสอบระบบ</p>
                    </label>
                  </th>

                  <th className="px-1 py-2 rounded-e-xl w-[5%]">
                    <div className="flex justify-center">
                      <button
                        className="bg-[#BBDEFB] text-[#0D47A1] hover:bg-[#0D47A1]
                       hover:text-white flex p-2 rounded-md my-2 cursor-pointer 
                        "
                        onClick={(e) => {
                          router.push('/requestgazservice/creategazservicer');
                        }}
                        data-title="สร้างคำขอ"
                      >
                        <span className="my-auto">
                          <MdCreateNewFolder size={20} className="my-auto" />
                        </span>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr className="bg-[#efece3] shadow-md gap-4">
                  <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                    4
                  </th>
                  <th className="px-1 py-2 font-normal w-[25%]">
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">เรื่อง : </span>
                      <p>ขอใช้งานการทดสอบระบบ</p>
                    </label>
                  </th>

                  <th className="px-1 py-2 rounded-e-xl w-[5%]">
                    <div className="flex justify-center">
                      <button
                        className="bg-[#BBDEFB] text-[#0D47A1] hover:bg-[#0D47A1]
                       hover:text-white flex p-2 rounded-md my-2 cursor-pointer 
                        "
                        onClick={(e) => {
                          router.push('/requestgazservice/creategazservicer');
                        }}
                        data-title="สร้างคำขอ"
                      >
                        <span className="my-auto">
                          <MdCreateNewFolder size={20} className="my-auto" />
                        </span>
                      </button>
                    </div>
                  </th>
                </tr>
                <tr className="bg-[#efece3] shadow-md gap-4">
                  <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                    5
                  </th>
                  <th className="px-1 py-2 font-normal w-[25%]">
                    <label className="flex justify-start">
                      <span className="font-semibold mr-2">เรื่อง : </span>
                      <p>ขอใช้งานการทดสอบระบบ</p>
                    </label>
                  </th>

                  <th className="px-1 py-2 rounded-e-xl w-[5%]">
                    <div className="flex justify-center">
                      <button
                        className="bg-[#BBDEFB] text-[#0D47A1] hover:bg-[#0D47A1]
                       hover:text-white flex p-2 rounded-md my-2 cursor-pointer 
                        "
                        onClick={(e) => {
                          router.push('/requestgazservice/creategazservicer');
                        }}
                        data-title="สร้างคำขอ"
                      >
                        <span className="my-auto">
                          <MdCreateNewFolder size={20} className="my-auto" />
                        </span>
                      </button>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
            <Paginator
              data={''}
              currentPage={1}
              totalRows={10}
              totalPages={2}
              fetchDataCallback={(e) => {}}
              setCurrentPageCallback={(e) => {}}
              totalLabel="รายการคำขอ จำนวน"
            />
          </div>
        </div>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <div className="flex justify-between mx-4">
            <div className="flex basis-1/4 gap-4">
              <button
                className="bg-gray-300 text-black hover:bg-gray-500 hover:text-white w-1/2 py-2 rounded-3xl my-4 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="my-auto">กลับหน้าหลัก</span>
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
                  router.push('/requestgazservice/creategazservicer');
                }}
              >
                <span className="my-auto">ดำเนินการต่อ</span>
              </button>
            </div>
          </div>
        </div>
      </LayoutAfterLogin>
    </>
  );
}

export default SelectGazServicer;
