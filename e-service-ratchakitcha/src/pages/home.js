import React from 'react'; 
import LayoutAfterLogin from '@/components/layout/layoutafterlogin';

function Home() {
  return (
    <>
      <LayoutAfterLogin>
        <div className="my-4 py-8 px-8 shadow-lg rounded-xl border border-[#efece3] flex flex-col">
          <span className="text-xl text-center">ยินดีต้อนรับ</span>
          <hr className="mt-5 mb-0" />
        </div>
      </LayoutAfterLogin>
    </>
  );
}

export default Home;
