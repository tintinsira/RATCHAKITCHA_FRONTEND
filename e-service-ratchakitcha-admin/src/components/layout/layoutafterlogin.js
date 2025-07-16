import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
 
import {
  RiArrowDownWideLine,
  RiUserSearchLine,
  RiUserSettingsLine,
  RiUserCommunityLine,
} from 'react-icons/ri'; 

import {
  AiOutlineFileSearch, 
} from 'react-icons/ai'; 

function LayoutAfterLogin({ children }) {
  const router = useRouter();

  const [showMenuUser, setShowMenuUser] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      icon: AiOutlineFileSearch,
      label: 'ค้นหาแบบฟอร์มระบบสมาชิก',
      path: '/member/listformmember',
    },
    {
      icon: RiUserSearchLine,
      label: 'ค้นหาข้อมูลผู้เป็นสมาชิก',
      path: '/member/listmember',
    },
    {
      icon: RiUserSettingsLine,
      label: 'กำหนดประเภทสมาชิก / จัดกลุ่มสมาชิก',
      path: '/usageschedule/rolesgroupsma/listrolesgroupsma',
    },
    {
      icon: RiUserCommunityLine,
      label: 'ขอบเขตในการเข้าใช้งานระบบของสมาชิก',
      path: '/usageschedule/accessrightsma/listaccessrightsma',
    },
  ];

  return (
    <> 
      <div className="min-h-screen bg-[#ffffff] flex"> 
        <div
          className={`${
            sidebarOpen ? 'w-[350px]' : 'w-16'
          } bg-[#efece3] shadow-lg transition-all duration-300 min-h-screen`}
        >
          <div className="p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`${
                sidebarOpen ? 'justify-end' : 'justify-center'
              } w-full flex mb-6 text-[#792024] hover:text-[#5a1619] transition-colors`}
            >
              <RiArrowDownWideLine
                size={24}
                className={`${
                  sidebarOpen ? 'rotate-90' : '-rotate-90'
                } transform transition-transform duration-300`}
              />
            </button>

            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => router.push(item.path)}
                  className={`w-full flex items-center ${
                    sidebarOpen
                      ? 'px-4 py-3 justify-start'
                      : 'p-3 justify-center'
                  } text-[#792024] hover:bg-[#792024] hover:text-white rounded-lg transition-all duration-200 group`}
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  {sidebarOpen && (
                    <span className="ml-3 whitespace-nowrap">{item.label}</span>
                  )}
                  {!sidebarOpen && (
                    <div className="absolute left-16 ml-2 px-2 py-1 bg-[#792024] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {item.label}
                    </div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
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
                <div className="flex w-1/2 justify-end">
                  <div className="w-3/12 flex relative text-center">
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
                            showMenuUser && 'rotate-180'
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

          {/* Content Area */}
          <div className="flex-1 container mx-auto p-4">
            <main>{children}</main>
          </div>
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
