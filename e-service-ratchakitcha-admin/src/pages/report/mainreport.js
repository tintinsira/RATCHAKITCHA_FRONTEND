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

function MainReport() {
  const router = useRouter();

  const [isShowFilter, setIsShowFilter] = useState(false);

  const [showStatus, setShowStatus] = useState("W"); //w รอตรวจ , s ส่งอนุมัติ , a ทั้งหมด

  return (
    <>
      <LayoutAfterLogin>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">รายงาน</span>
          <hr className="my-5" />
          <div className="w-full flex flex-wrap mx-auto gap-4 px-4">
            <div class="flex flex-row gap-4 w-full">
              <div className="w-1/2">
                <div
                  className={`border-[#792024] bg-white flex border-2 rounded-lg py-3 px-4 cursor-pointer hover:bg-[#792024] hover:text-white`}
                  onClick={(e) => {
                    router.push('/report/subreport');
                  }}
                >
                  <div className="flex-1">รายงานที่ 1</div>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  className={`border-[#792024] bg-white flex border-2 rounded-lg py-3 px-4 cursor-pointer hover:bg-[#792024] hover:text-white`}
                  onClick={(e) => {
                    router.push('/report/subreport');
                  }}
                >
                  <div className="flex-1">รายงานที่ 2</div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4 w-full">
              <div className="w-1/2">
                <div
                  className={`border-[#792024] bg-white flex border-2 rounded-lg py-3 px-4 cursor-pointer hover:bg-[#792024] hover:text-white`}
                  onClick={(e) => {
                    router.push('/report/subreport');
                  }}
                >
                  <div className="flex-1">รายงานที่ 3</div>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  className={`border-[#792024] bg-white flex border-2 rounded-lg py-3 px-4 cursor-pointer hover:bg-[#792024] hover:text-white`}
                  onClick={(e) => {
                    router.push('/report/subreport');
                  }}
                >
                  <div className="flex-1">รายงานที่ 4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAfterLogin>
    </>
  );
}

export default MainReport;
