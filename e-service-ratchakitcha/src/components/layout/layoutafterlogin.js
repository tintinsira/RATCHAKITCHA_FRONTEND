import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'; 

import { TbMessageQuestion } from 'react-icons/tb';
import { RiArrowDownWideLine } from 'react-icons/ri';

function LayoutAfterLogin({ children }) {

  const router = useRouter();

  const [showMenuUser, setShowMenuUser] = useState(false); 

  return (
    <>
      <div className="bg-[#792024] text-white flex py-4"></div>
      <div className="min-h-screen bg-[#ffffff] ">
        <div className="bg-[#efece3] shadow-lg">
          <div className="container mx-auto text-[#792024] font-semibold">
            <div className="py-2 flex justify-between">
              <div className="flex">
                <Image
                  aria-hidden
                  src="/logo.png"
                  alt="Logo icon"
                  width={75}
                  height={75}
                />
              </div>
              <div className="flex w-1/2">
                <div className="w-3/4 pr-4 flex justify-end">
                  <div className="flex flex-row gap-4 my-auto">
                    <button
                      className={`text-[#792024] no-underline flex cursor-pointer transition-all duration-200 hover:scale-105`}
                      onClick={(e) => {
                        router.push('/requestgazservice/listrequestgazser');
                      }}
                    >
                      <span className="mx-auto flex">
                        ขอรับสำเนาข้อมูลราชกิจจานุเบกษา
                      </span>
                    </button>
                    <button
                      className={`text-[#792024] no-underline flex cursor-pointer transition-all duration-200 hover:scale-105`}
                      onClick={(e) => {}}
                    >
                      <span className="mx-auto flex">
                        ขอทราบวันเผยแพร่ราชกิจจานุเบกษา
                      </span>
                    </button>
                    <button
                      className={`text-[#792024] no-underline flex cursor-pointer transition-all duration-200 hover:scale-105`}
                      onClick={(e) => {}}
                    >
                      <span className="mx-auto flex">
                        ค้นหาประกาศเกี่ยวกับการล้มละลาย
                      </span>
                    </button>
                    <button
                      className={`text-[#792024] no-underline flex cursor-pointer transition-all duration-200 hover:scale-105 py-2`}
                      onClick={(e) => {}}
                      data-title={'ถาม-ตอบ'}
                    >
                      <span className="mx-auto flex">
                        <TbMessageQuestion size={30} />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-3/12 flex relative justify-center text-center">
                  <button
                    className={`${
                      showMenuUser
                        ? 'rounded-t-xl rounded-tr-xl '
                        : 'rounded-full '
                    } cursor-pointer border-none bg-[#792024] my-auto p-1 text-white no-underline flex w-full px-4 py-3 ml-2`}
                    onClick={(e) => {
                      setShowMenuUser(!showMenuUser);
                    }}
                  >
                    <span className="mx-auto flex">
                      ทดสอบ ระบบ
                      <RiArrowDownWideLine
                        size={20}
                        className={`${
                          showMenuUser === 'S' && 'rotate-180'
                        } ml-4 my-auto transform duration-500 `}
                      />
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      showMenuUser ? 'opacity-100' : 'opacity-0'
                    }
                     bg-white absolute rounded-b-xl rounded-br-xl top-14 left-2 right-0 `}
                    style={{ transitionProperty: 'opacity, max-height' }}
                  >
                    <button
                      className={`${
                        showMenuUser ? ' border-t-2 border-white ' : ''
                      } cursor-pointer hover:bg-[#792024] hover:text-white w-full py-3 px-4`}
                      onClick={(e) => {}}
                    >
                      แก้ไขข้อมูลส่วนบุคคล
                    </button>
                    <button
                      className={`${
                        showMenuUser ? ' border-t-2 border-white ' : ''
                      } cursor-pointer hover:bg-[#792024] hover:text-white w-full py-3 px-4`}
                      onClick={(e) => {
                        router.push('/login');
                      }}
                    >
                      เปลี่ยนนหัสผ่าน
                    </button>
                    <button
                      className={`${
                        showMenuUser ? ' border-t-2 border-white ' : ''
                      } cursor-pointer hover:bg-[#792024] hover:text-white w-full py-3 px-4`}
                      onClick={(e) => {
                        router.push('/login');
                      }}
                    >
                      ออกจากระบบ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <main>{children}</main>
        </div>
      </div>
      <footer className="bg-[#792024] text-white flex py-2">
        <div className="mx-auto">
          <p>สงวนลิขสิทธิ์ ตามพระราชบัญญัติลิขสิทธิ์ พ.ศ. ๒๕๓๗</p>
        </div>
      </footer>
    </>
  );
}

export default LayoutAfterLogin;
