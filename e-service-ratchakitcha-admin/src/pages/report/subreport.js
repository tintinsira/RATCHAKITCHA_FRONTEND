import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';

import { BsSearch, BsFillPrinterFill } from 'react-icons/bs';
import { LuFileSearch, LuFileCog } from 'react-icons/lu';
import { MdFilterList, MdEditDocument, MdOutlinePayment } from 'react-icons/md';
import { RiDraftFill } from 'react-icons/ri';

import InputSelectFormTitle from '@/components/input/InputSelectFormTitle';
import DatepickerInput from '@/components/input/DatepickerInput';
import Paginator from '@/components/paginator/Paginator';

function Subreport() {
  const router = useRouter();

  const [isShowFilter, setIsShowFilter] = useState(false);

  const [showStatus, setShowStatus] = useState("W"); //w รอตรวจ , s ส่งอนุมัติ , a ทั้งหมด

  return (
    <>
      <LayoutAfterLogin>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">รายงานที่</span>
          <hr className="my-5" />
          <div className="w-3/4 flex flex-wrap mx-auto gap-4 px-4">
            <div className="flex flex-row gap-4 w-full mt-8 justify-center">
              <div className="basis-1/3">
                <DatepickerInput
                  labelText="เริ่ม วัน/เดือน/ปี"
                  placeholder={`วว/ดด/ปป`}
                  name="birthday"
                  value={''}
                  onChange={(e) => {}}
                  isDisable={false}
                  isRequire={true}
                  textSmall={``}
                />
              </div>
              <div className="basis-1/3">
                <DatepickerInput
                  labelText="ถึง วัน/เดือน/ปี"
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
            <div className="flex flex-row gap-4 w-full mt-8 justify-center">
              <div className="w-3/12 flex gap-4">
                <button
                  className="bg-gray-300 text-black hover:bg-gray-500 hover:text-white w-1/2 py-2 rounded-3xl 
                  hover:-translate-y-1 hover:scale-110
                      duration-200 transform cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    router.back();
                  }}
                >
                  <span className="my-auto">ย้อนกลับ</span>
                </button>
                <button
                  className="bg-[#ad9e71] text-white hover:bg-[#792024] hover:text-white w-1/2 py-2 rounded-3xl 
                      hover:-translate-y-1 hover:scale-110
                      duration-200 transform cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <span className="my-auto">ดูรายงาน</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutAfterLogin>
    </>
  );
}

export default Subreport;
