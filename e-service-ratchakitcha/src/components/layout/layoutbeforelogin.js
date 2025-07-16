import Image from 'next/image';
import React from 'react'; 

function LayoutBeforeLogin({ children }) {
  return (
    <>
      <div className="bg-[#792024] text-white flex py-4"></div>
      <div className="min-h-screen bg-[#ffffff] ">
        <div className="bg-[#efece3] shadow-lg">
          <div className="container mx-auto text-[#792024] font-semibold">
            <div className="py-2">
              <div className="flex">
                <Image
                  aria-hidden
                  src="/logo.png"
                  alt="Logo icon"
                  width={75}
                  height={75}
                />
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

export default LayoutBeforeLogin;
