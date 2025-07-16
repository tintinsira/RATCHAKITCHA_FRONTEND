import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import { AiFillInfoCircle } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
 

const InputFileForm = ({
  name,
  refFucn,
  textSmall,
  acceptedFileTypes = ['application/pdf', 'image/jpeg', 'image/png'],
  onFileUploadSucceed, 
  isDisable = false,
  isMultiple = false,
  errorMsg,
}) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileUrl, setFileUrl] = useState(null); // สร้าง state สำหรับ URL ของไฟล์
  const [loading, setLoading] = useState(false); 

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage('ขนาดไฟล์เกิน 2MB');
        return;
      }

      if (!acceptedFileTypes.includes(file.type)) {
        setErrorMessage('ประเภทไฟล์ไม่รองรับ');
        return;
      }

      setUploadedFile(file);
      setErrorMessage('');
      onFileUpload(file); // เรียกใช้งานฟังก์ชัน onFileUpload
    }
  };

  const onFileUpload = async (file) => {
    setLoading(true); // เปิดการโหลด
    try {
      let response = await ETRM_API.uploadFileAttach(file);
      const fileObjectUrl = URL.createObjectURL(file);
      setFileUrl(fileObjectUrl); // เก็บ URL ของไฟล์
      setLoading(false); // ปิดการโหลด
      if (onFileUploadSucceed) {
        onFileUploadSucceed(response); // ส่งค่าผลลัพธ์ไปยัง parent component
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('เกิดข้อผิดพลาดในการอัปโหลดไฟล์');
      setLoading(false); // ปิดการโหลด
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null); // ลบไฟล์ที่อัปโหลด
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: isMultiple,
    accept: acceptedFileTypes.reduce((acc, type) => {
      acc[type] = [];
      return acc;
    }, {}),
  });

  const viewFile = () => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <>
      <div className="flex">
        <div className="basis-full">
          <div
            {...getRootProps()}
            className={`hover:outline-[#792024] bg-gradient-to-t from-[#efece3] to-[#efece3] outline-[#792024]
              py-2 px-4 flex flex-col rounded-xl
              items-center justify-center outline-dashed outline-2 outline-offset-2  
              cursor-pointer relative w-auto min-h-[115px] `}
          >
            <input name={name} ref={refFucn} {...getInputProps()} />
            <div>
              <MdCloudUpload size={80} className="text-[#792024]" />
            </div>
            <div className="flex lg:flex-row flex-col justify-center text-center">
              <span className="font-medium text-sm lg:text-lg lg:mr-2 my-auto text-[#792024]">
                วางไฟล์ที่นี่
              </span>
              <span className="my-auto text-sm lg:text-lg"> หรือ </span>
              <button
                className="lg:ml-2 bg-[#efece3] text-[#792024] hover:bg-[#792024] hover:text-[#efece3]
                    border-[#792024] border-1 rounded-2xl font-light text-sm lg:text-xl cursor-pointer py-1 px-4"
                type="button"
              >
                เลือกไฟล์
              </button>
            </div>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
          )}
          {textSmall && (
            <div className="flex justify-end mt-2">
              <AiFillInfoCircle
                size={15}
                className="mr-2 text-[#792024] my-auto"
              />
              <span className="my-auto text-[#792024] text-xs lg:text-sm">
                {textSmall}
              </span>
            </div>
          )}

          {errorMsg && (
            <div className="flex justify-end mt-2">
              <span className="my-auto text-red-500 text-xs lg:text-sm">
                {errorMsg}
              </span>
            </div>
          )}
          {loading && (
            <div className="flex justify-center mt-4">
              <span>กำลังอัปโหลด...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InputFileForm;
