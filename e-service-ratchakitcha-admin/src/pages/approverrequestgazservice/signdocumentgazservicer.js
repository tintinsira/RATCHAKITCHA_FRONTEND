import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutAfterLogin from '@/components/layout/layoutafterlogin'; 
import { BsSearch } from 'react-icons/bs';
import PDFViewer from '@/components/PDFViewer/PDFViewer';
import InputForm from '@/components/input/InputForm';
import InputTextareaForm from '@/components/input/InputTextareaForm';

function SignDocumentGazServicer() {
  const router = useRouter();
  const { reqDocNo } = router.query;
  const [searchQuery, setSearchQuery] = useState(''); // เพิ่ม state สำหรับ search
 
  const [wantToUseList, setWantToUseList] = useState([
      { idx: '1', textUse: 'ขอสำเนาที่มีผู้รับรอง', count: 1 },
      { idx: '2', textUse: 'ขอสำเนาที่มีผู้รับรอง2', count: 2 },
      { idx: '3', textUse: 'ขอสำเนาที่มีผู้รับรอง3', count: 1 },
    ]);

  return (
    <LayoutAfterLogin>
      <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
        <div className="flex flex-row gap-4">
          <div className="w-3/5 flex flex-col mx-auto shadow-lg rounded-xl border border-[#efece3] p-4 h-fit">
            <span className="text-xl">
              <font className="font-semibold">เลขที่คำขอ : </font> @FORM12345678
            </span>
            <hr className="my-5" />
            <div className="w-full flex flex-col">
              <div className="flex flex-row gap-4 w-full">
                <div className="basis-3/4">
                  <InputForm
                    lable="รายการเรื่องที่ต้องการขอข้อมูล"
                    type="text"
                    placeholder={`รายการเรื่องที่ต้องการขอข้อมูล`}
                    name=""
                    value={'ขอใช้งานการทดสอบระบบ'}
                    onChange={(e) => {}}
                    isDisable={true}
                    isRequire={true}
                    textSmall={``}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4 w-full mt-4">
                <div className="basis-3/5">
                  <InputTextareaForm
                    lable="วัตถุประสงค์ในการขอข้อมูล"
                    type="text"
                    placeholder={`กรอก วัตถุประสงค์ในการขอข้อมูล`}
                    name="obj"
                    value={''}
                    onChange={(e) => {}}
                    isDisable={true}
                    isRequire={true}
                    textSmall={``}
                    rows={6}
                  />
                </div>
                <div className="basis-2/5">
                  <span className="font-semibold">ประเภทของสำเนาข้อมูล</span>
                  <div className="flex flex-col mt-2 mb-2 gap-4">
                    {wantToUseList.map((item) => (
                      <div
                        key={item.idx}
                        className="flex justify-between items-center"
                      >
                        <span>{item.textUse}</span>
                        <div className="flex items-center space-x-2">
                          <span className="w-8 text-center">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="basis-[20%] flex gap-2 mt-4">
              <button
                className="bg-[#792024] text-white w-1/2 py-2 rounded-3xl mx-auto
                      hover:-translate-y-1 hover:scale-110
                      duration-200 transform"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="my-auto">เซ็นเอกสาร</span>
              </button>
            </div>
          </div>
          <div
            className={`w-2/5 flex flex-row mx-auto shadow-lg rounded-xl border border-[#efece3] p-4 h-fit`}
          >
            <PDFViewer fileFromAPI={''} />
          </div>
        </div>
      </div>
    </LayoutAfterLogin>
  );
}

export default SignDocumentGazServicer;
