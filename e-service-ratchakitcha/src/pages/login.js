import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ReCAPTCHA from 'react-google-recaptcha';
import { MdLogin, MdSmartphone } from 'react-icons/md';
import { TbEye, TbEyeOff, TbLock, TbUserPlus } from 'react-icons/tb';
import { RiIdCardLine } from 'react-icons/ri';
import Image from 'next/image';

function Login() {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.push('home');
  };

  const handleForgotPassword = () => { 
    console.log('Forgot password clicked');
  };

  const handleRegister = () => { 
    router.push('applymembertsm/informationperson');
  };

  const handleThaiD = () => { 
    console.log('Thai D app login clicked');
  };

  return (
    <>
      <div className="min-h-screen bg-[#efece3] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div
                  className="inline-block p-4 rounded-full mb-4"
                  style={{ backgroundColor: '#792024' }}
                >
                  <MdLogin className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-black mb-2">
                  เข้าสู่ระบบ
                </h1>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1">
                  <label className="block font-medium text-black">
                    เลขบัตรประชาชน *
                  </label>
                  <div className="relative">
                    <RiIdCardLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="idcard"
                      className={`w-full pl-12 pr-12 py-3 rounded-lg border transition-all 
                        duration-200 border-gray-200 focus:ring-2 focus:ring-[#ad9e71] focus:outline-none`}
                      placeholder="กรอกเลขบัตรประชาชน"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <label className="block font-medium text-black">
                    รหัสผ่าน *
                  </label>
                  <div className="relative">
                    <TbLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className={`w-full pl-12 pr-12 py-3 rounded-lg border transition-all duration-200
                         border-gray-200 focus:ring-2 focus:ring-[#ad9e71] focus:outline-none`}
                      placeholder="อย่างน้อย 8 ตัวอักษร"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <TbEyeOff className="w-5 h-5" />
                      ) : (
                        <TbEye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm text-[#792024] hover:text-[#ad9e71] font-medium transition-colors duration-200 cursor-pointer"
                  >
                    ลืมรหัสผ่าน?
                  </button>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={(token) => {}} />
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full bg-[#792024] hover:bg-[#ad9e71] text-white font-semibold py-3 px-6 
                  rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2
                  cursor-pointer"
                >
                  <MdLogin className="w-5 h-5" />
                  เข้าสู่ระบบ
                </button>
              </div>

              <div className="mt-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">หรือ</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleRegister}
                  className="w-full bg-white hover:bg-gray-50
                   text-[#792024] font-semibold py-3 px-6 rounded-lg border-2
                    border-[#792024] transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <TbUserPlus className="w-5 h-5" />
                  สมัครสมาชิก
                </button>
              </div>

              <div className="mt-4">
                <a
                  type="button"
                  onClick={handleThaiD}
                  className="w-full bg-[#efece3] hover:bg-[#ad9e71] text-black font-semibold py-3 px-6 
                  border borer-[#ad9e71] hover:border-none
                  rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                  href="/thaiD"
                  target="_blank"
                >
                  <Image
                    aria-hidden
                    src="/thaid-logo.png"
                    alt="thaid icon"
                    width={30}
                    height={30}
                  />
                  เข้าสู่ระบบด้วยแอพ ThaiD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
