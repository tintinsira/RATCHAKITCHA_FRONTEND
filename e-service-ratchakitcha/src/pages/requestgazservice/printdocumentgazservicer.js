import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';
import LayoutBeforeLogin from '@/components/layout/layoutbeforelogin'; // import LayoutBeforeLogin
import { BsSearch } from 'react-icons/bs';
import { MdCreateNewFolder } from 'react-icons/md';
import StepCreateGazService from './stepcreategazservice';
import Image from 'next/image';
import PDFViewer from '@/components/PDFViewer/PDFViewer';

function PrintDocumentGazServicer() {
  const router = useRouter();
  const { reqDocNo } = router.query;
  const [searchQuery, setSearchQuery] = useState(''); // เพิ่ม state สำหรับ search

  // เลือก Layout ตามเงื่อนไข
  const LayoutComponent =
    reqDocNo === undefined ? LayoutBeforeLogin : LayoutAfterLogin;

  return (
    <LayoutComponent>
      <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
        <span className="text-xl">พิมพ์เอกสาร</span>
        <hr className="my-5" />
        <div className="flex flex-row gap-4">
          {reqDocNo === undefined ? (
            <>
              <div className="w-3/12 flex flex-col mx-auto shadow-lg rounded-xl border border-[#efece3] p-4 h-fit">
                <div className="w-full drop-shadow-md bg-white flex py-2 px-4 my-4 rounded-2xl gap-2">
                  <div className="basis-[2%] flex">
                    <span className="my-auto">
                      <BsSearch size={20} className="my-auto" />
                    </span>
                  </div>
                  <div className="basis-[100%]">
                    <input
                      type={'text'}
                      placeholder={'ค้นหาด้วย เลขคำขอ ชื่อเรื่อง'}
                      name="searchNameQuery"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                      className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad9e71]"
                    />
                  </div>
                </div>
                <div className="basis-[20%] flex gap-2">
                  <button
                    className="bg-[#ad9e71] text-white hover:bg-[#792024] hover:text-white w-full py-2 rounded-3xl
                      hover:-translate-y-1 hover:scale-110
                      duration-200 transform"
                    onClick={(e) => {
                      e.preventDefault();
                      // เพิ่ม logic สำหรับการค้นหาที่นี่
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
                      setSearchQuery(''); // รีเซ็ตค่าค้นหา
                    }}
                  >
                    <span className="my-auto">เริ่มใหม่</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div
            className={`${
              reqDocNo === undefined ? 'w-3/4' : 'w-full'
            } flex flex-row mx-auto shadow-lg rounded-xl border border-[#efece3] p-4 h-fit`}
          >
            <PDFViewer fileFromAPI={''} />
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}

export default PrintDocumentGazServicer;
