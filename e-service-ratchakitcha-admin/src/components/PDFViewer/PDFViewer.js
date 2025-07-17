import { useEffect, useRef, useState } from 'react';

const PDFViewer = ({ fileFromAPI }) => {
  const [pdfFileUrl, setPdfFileUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const iframeRef = useRef(null);
  const fallbackPdf = '/pdf/77153-sign2.pdf';

  useEffect(() => {
    const loadPDF = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (fileFromAPI) { 
          let pdfData;
          if (fileFromAPI instanceof ArrayBuffer) {
            pdfData = new Uint8Array(fileFromAPI);
          } else if (fileFromAPI instanceof Uint8Array) {
            pdfData = fileFromAPI;
          } else {
            throw new Error('รูปแบบข้อมูล PDF ไม่ถูกต้อง');
          }

          if (!pdfData || pdfData.length === 0) {
            throw new Error('ข้อมูล PDF ว่างเปล่า');
          }

          const pdfBlob = new Blob([pdfData], {
            type: 'application/pdf',
          });

          const pdfObjectURL = URL.createObjectURL(pdfBlob);
          setPdfFileUrl(pdfObjectURL);
        } else {
          console.warn('ไม่พบข้อมูล PDF จาก API, ใช้ไฟล์สำรอง');
          setPdfFileUrl(fallbackPdf);
        }
      } catch (err) {
        console.error('เกิดข้อผิดพลาดในการโหลด PDF:', err);
        setError(err.message);
        setPdfFileUrl(fallbackPdf);  
      } finally {
        setIsLoading(false);
      }
    };

    loadPDF();
 
    return () => {
      if (pdfFileUrl && pdfFileUrl.startsWith('blob:')) {
        URL.revokeObjectURL(pdfFileUrl);
      }
    };
  }, [fileFromAPI]);

  const handleIframeLoad = () => {
    setIsLoading(false); 
  };

  const handleIframeError = () => {
    setError('ไม่สามารถโหลด PDF ได้');
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>กำลังโหลด PDF...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96 text-red-500">
        <p>เกิดข้อผิดพลาด: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {pdfFileUrl ? (
        <iframe
          ref={iframeRef}
          src={pdfFileUrl}
          width="100%"
          height="800px" 
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          style={{
            border: 'none',
            minHeight: '75rem',
          }}
          title="PDF Viewer"
        />
      ) : (
        <div className="flex items-center justify-center h-96">
          <p>ไม่พบไฟล์ PDF</p>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
