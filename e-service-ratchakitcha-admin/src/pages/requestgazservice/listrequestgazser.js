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

function ListRequestGazSer() {
  const router = useRouter();

  const [isShowFilter, setIsShowFilter] = useState(false);

  const [showStatus, setShowStatus] = useState("W"); //w รอตรวจ , s ส่งอนุมัติ , a ทั้งหมด

  return (
    <>
      <LayoutAfterLogin>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl">
            คำร้องขอรับบริการข้อมูลราชกิจจานุเบกษา
          </span>
          <hr className="my-5" />
          <div className="w-full flex flex-col mx-auto">
            <div className="flex justify-end">
              <div className="drop-shadow-md bg-white flex flex-row py-2 px-4 my-4 rounded-2xl gap-2 w-1/2">
                <div className="basis-[2%] flex">
                  <span className="my-auto">
                    <BsSearch size={20} className="my-auto" />
                  </span>
                </div>
                <div className="basis-[78%]">
                  <input
                    type={'text'}
                    placeholder={'ค้นหาด้วย เลขคำขอ ชื่อเรื่อง'}
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
                <div className="flex flex-row gap-4 w-3/4 mt-8">
                  <div className="basis-1/3">
                    <div className="basis-1/3">
                      <DatepickerInput
                        labelText="วัน/เดือน/ปี ที่ร้องขอ"
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
          <div className="mb-4 py-8 px-8 shadow-lg rounded-b-xl border-t-0 border border-[#efece3] flex flex-col">
            <div className="mt-4 flex flex-row ">
              <div
                className={`${
                  showStatus === 'W'
                    ? ' text-[#792024] bg-white hover:bg-gray-50'
                    : ' bg-[#792024] text-white '
                } basis-2/12 text-center text-xl py-4 cursor-pointer border-l border-t border-r border-[#792024] rounded-t-xl relative`}
                onClick={(e) => {
                  e.preventDefault();
                  setShowStatus('W');
                }}
              >
                รอตรวจ
              </div>
              <div
                className={`${
                  showStatus === 'S'
                    ? ' text-[#792024] bg-white hover:bg-gray-50'
                    : ' bg-[#792024] text-white '
                } basis-2/12 text-center text-xl py-4 cursor-pointer border-l border-t border-r border-[#792024] rounded-t-xl relative -ml-px`}
                onClick={(e) => {
                  e.preventDefault();
                  setShowStatus('S');
                }}
              >
                ส่งอนุมัติ
              </div>
              <div
                className={`${
                  showStatus === 'A'
                    ? ' text-[#792024] bg-white hover:bg-gray-50'
                    : ' bg-[#792024] text-white '
                } basis-2/12 text-center text-xl py-4 cursor-pointer border-l border-t border-r border-[#792024] rounded-t-xl relative -ml-px`}
                onClick={(e) => {
                  e.preventDefault();
                  setShowStatus('A');
                }}
              >
                ทั้งหมด
              </div>
              <div className="flex-1 border-b border-[#792024]"></div>
            </div>

            <div className="w-full border-l border-r border-b border-0 border-[#792024] px-4 bg-white">
              <table className="w-full min-w-full table-auto text-left border-separate border-spacing-y-4 mt-5">
                <tbody>
                  <tr className="bg-[#efece3] shadow-md gap-4">
                    <th className="px-1 py-2 font-normal text-center rounded-s-xl w-[5%]">
                      1
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-2">
                          วันที่ร้องขอ :
                        </span>
                        <p>16/07/2568</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-2">เรื่อง : </span>
                        <p>ขอใช้งานการทดสอบระบบ</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-4">สถานะ : </span>
                        {showStatus === 'W' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#E1BEE7] text-[#6A1B9A] my-auto border border-[#E1BEE7] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                รอตรวจสอบ
                              </span>
                            </label>
                          </>
                        ) : showStatus === 'S' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#C8E6C9] text-[#1B5E20] my-auto border border-[#C8E6C9] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                สำเร็จ
                              </span>
                            </label>
                          </>
                        ) : (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#E1BEE7] text-[#6A1B9A] my-auto border border-[#E1BEE7] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                รอตรวจสอบ
                              </span>
                            </label>
                          </>
                        )}
                      </label>
                    </th>
                    <th className="px-1 py-2 rounded-e-xl w-[5%]">
                      <div className="flex justify-center">
                        <button
                          className="bg-[#E1BEE7] text-[#6A1B9A] hover:bg-[#cca6e4]
                        hover:text-[#6A1B9A] flex p-2 rounded-md my-2 cursor-pointer "
                          onClick={(e) => {
                            router.push(
                              '/requestgazservice/selectgazservicery'
                            );
                          }}
                          data-title="ตรวจสอบ"
                        >
                          <span className="my-auto">
                            <LuFileCog size={20} className="my-auto" />
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
                        <span className="font-semibold mr-2">
                          วันที่ร้องขอ :{' '}
                        </span>
                        <p>16/07/2568</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-2">เรื่อง : </span>
                        <p>ขอใช้งานการทดสอบระบบ</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-4">สถานะ : </span>
                        {showStatus === 'W' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#E1BEE7] text-[#6A1B9A] my-auto border border-[#E1BEE7] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                รอตรวจสอบ
                              </span>
                            </label>
                          </>
                        ) : showStatus === 'S' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#C8E6C9] text-[#1B5E20] my-auto border border-[#C8E6C9] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                สำเร็จ
                              </span>
                            </label>
                          </>
                        ) : (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#C8E6C9] text-[#1B5E20] my-auto border border-[#C8E6C9] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                สำเร็จ
                              </span>
                            </label>
                          </>
                        )}
                      </label>
                    </th>
                    <th className="px-1 py-2 rounded-e-xl w-[5%]">
                      <div className="flex justify-center">
                        <button
                          className="bg-[#E1BEE7] text-[#6A1B9A] hover:bg-[#cca6e4]
                        hover:text-[#6A1B9A] flex p-2 rounded-md my-2 cursor-pointer "
                          onClick={(e) => {
                            router.push(
                              '/requestgazservice/selectgazservicery'
                            );
                          }}
                          data-title="ตรวจสอบ"
                        >
                          <span className="my-auto">
                            <LuFileCog size={20} className="my-auto" />
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
                        <span className="font-semibold mr-2">
                          วันที่ร้องขอ :{' '}
                        </span>
                        <p>16/07/2568</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-2">เรื่อง : </span>
                        <p>ขอใช้งานการทดสอบระบบ</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-4">สถานะ : </span>
                        {showStatus === 'W' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#E1BEE7] text-[#6A1B9A] my-auto border border-[#E1BEE7] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                รอตรวจสอบ
                              </span>
                            </label>
                          </>
                        ) : showStatus === 'S' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#C8E6C9] text-[#1B5E20] my-auto border border-[#C8E6C9] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                สำเร็จ
                              </span>
                            </label>
                          </>
                        ) : (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#C8E6C9] text-[#1B5E20] my-auto border border-[#C8E6C9] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                สำเร็จ
                              </span>
                            </label>
                          </>
                        )}
                      </label>
                    </th>
                    <th className="px-1 py-2 rounded-e-xl w-[5%]">
                      <div className="flex justify-center">
                        <button
                          className="bg-[#E1BEE7] text-[#6A1B9A] hover:bg-[#cca6e4]
                        hover:text-[#6A1B9A] flex p-2 rounded-md my-2 cursor-pointer "
                          onClick={(e) => {
                            router.push(
                              '/requestgazservice/selectgazservicery'
                            );
                          }}
                          data-title="ตรวจสอบ"
                        >
                          <span className="my-auto">
                            <LuFileCog size={20} className="my-auto" />
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
                        <span className="font-semibold mr-2">
                          วันที่ร้องขอ :{' '}
                        </span>
                        <p>16/07/2568</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-2">เรื่อง : </span>
                        <p>ขอใช้งานการทดสอบระบบ</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-4">สถานะ : </span>
                        {showStatus === 'W' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#E1BEE7] text-[#6A1B9A] my-auto border border-[#E1BEE7] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                รอตรวจสอบ
                              </span>
                            </label>
                          </>
                        ) : showStatus === 'S' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#C8E6C9] text-[#1B5E20] my-auto border border-[#C8E6C9] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                สำเร็จ
                              </span>
                            </label>
                          </>
                        ) : (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#E1BEE7] text-[#6A1B9A] my-auto border border-[#E1BEE7] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                รอตรวจสอบ
                              </span>
                            </label>
                          </>
                        )}
                      </label>
                    </th>
                    <th className="px-1 py-2 rounded-e-xl w-[5%]">
                      <div className="flex justify-center">
                        <button
                          className="bg-[#E1BEE7] text-[#6A1B9A] hover:bg-[#cca6e4]
                        hover:text-[#6A1B9A] flex p-2 rounded-md my-2 cursor-pointer "
                          onClick={(e) => {
                            router.push(
                              '/requestgazservice/selectgazservicery'
                            );
                          }}
                          data-title="ตรวจสอบ"
                        >
                          <span className="my-auto">
                            <LuFileCog size={20} className="my-auto" />
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
                        <span className="font-semibold mr-2">
                          วันที่ร้องขอ :{' '}
                        </span>
                        <p>16/07/2568</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-2">เรื่อง : </span>
                        <p>ขอใช้งานการทดสอบระบบ</p>
                      </label>
                    </th>
                    <th className="px-1 py-2 font-normal w-[25%]">
                      <label className="flex justify-start">
                        <span className="font-semibold mr-4">สถานะ : </span>
                        {showStatus === 'W' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#E1BEE7] text-[#6A1B9A] my-auto border border-[#E1BEE7] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                รอตรวจสอบ
                              </span>
                            </label>
                          </>
                        ) : showStatus === 'S' ? (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#C8E6C9] text-[#1B5E20] my-auto border border-[#C8E6C9] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                สำเร็จ
                              </span>
                            </label>
                          </>
                        ) : (
                          <>
                            <label
                              className={`flex justify-center w-fit h-fit text-center 
                              rounded-full py-1 px-4 bg-[#C8E6C9] text-[#1B5E20] my-auto border border-[#C8E6C9] shadow-lg`}
                            >
                              <span className="xl:text-md lg:text-sm">
                                สำเร็จ
                              </span>
                            </label>
                          </>
                        )}
                      </label>
                    </th>
                    <th className="px-1 py-2 rounded-e-xl w-[5%] ">
                      <div className="flex justify-center gap-2">
                        <div className="flex justify-center">
                          <button
                            className="bg-[#E1BEE7] text-[#6A1B9A] hover:bg-[#cca6e4]
                          hover:text-[#6A1B9A] flex p-2 rounded-md my-2 cursor-pointer "
                            onClick={(e) => {
                              router.push(
                                '/requestgazservice/selectgazservicery'
                              );
                            }}
                            data-title="ตรวจสอบ"
                          >
                            <span className="my-auto">
                              <LuFileCog size={20} className="my-auto" />
                            </span>
                          </button>
                        </div>
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
        </div>
      </LayoutAfterLogin>
    </>
  );
}

export default ListRequestGazSer;
