import React, { useState, useEffect } from "react";

function Paginator({
  data,
  currentPage = 1,
  totalRows,
  totalPages = 0,
  fetchDataCallback,
  setCurrentPageCallback,
  totalLabel = "รายการทั้งหมด จำนวน",
}) {
  //Pagination
  useEffect(() => {
    if (currentPage) {
      setPageInputValue(currentPage);
    }
  }, [currentPage]);

  const [pageInputValue, setPageInputValue] = useState(currentPage);

  const pageInputChange = (event) => {
    event.preventDefault();
    const pageNo = event.target.value;
    if (pageNo >= 1 && pageNo <= totalPages) {
      setPageInputValue(pageNo);
    } else if (pageNo > totalPages) {
      setPageInputValue(totalPages);
    } else {
      setCurrentPageCallback(1);
      setPageInputValue(1);
    }
  };

  const pageInputBlur = (event) => {
    goToPage();
  };

  const pageInputKeyDown = (event) => {
    const key = event.key;
    const scriptRange = /^[0-9]*$/;

    if (
      key !== "Backspace" &&
      key !== "Delete" &&
      key !== "Enter" &&
      !scriptRange.test(key)
    ) {
      event.preventDefault();
    } else if (event.key === "Enter") {
      goToPage();
      ////console.log("Enter Page pressed!");
    }
  };

  const goToPage = () => {
    const pageNo = parseInt(pageInputValue);
    ////console.log("pageNopageNopageNopageNo");
    ////console.log(pageNo);
    ////console.log("pageNopageNopageNopageNo");
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPageCallback(pageNo);
      fetchDataCallback(pageNo, true);
      setPageInputValue(pageNo);
    } else if (pageNo > totalPages) {
      setCurrentPageCallback(totalPages);
      fetchDataCallback(totalPages, true);
      setPageInputValue(totalPages);
    } else {
      setCurrentPageCallback(1);
      fetchDataCallback(1, true);
      setPageInputValue(1);
    }
  };

  const firstPage = (event) => {
    event.preventDefault();
    const newCurrentPage = 1;
    setCurrentPageCallback(newCurrentPage);
    fetchDataCallback(newCurrentPage, true);
    setPageInputValue(newCurrentPage);
  };

  const previousPage = (event) => {
    event.preventDefault();
    const newCurrentPage = currentPage - 1;
    setCurrentPageCallback(newCurrentPage);
    fetchDataCallback(newCurrentPage, true);
    setPageInputValue(newCurrentPage);
  };

  const nextPage = (event) => {
    event.preventDefault();
    const newCurrentPage = currentPage + 1;
    setCurrentPageCallback(newCurrentPage);
    fetchDataCallback(newCurrentPage, true);
    setPageInputValue(newCurrentPage);
  };

  const lastPage = (event) => {
    event.preventDefault();
    const newCurrentPage = totalPages;
    setCurrentPageCallback(newCurrentPage);
    fetchDataCallback(newCurrentPage, true);
    setPageInputValue(newCurrentPage);
  };

  return (
    <>
      <div
        className={`${
          totalRows > 0 ? 'justify-between' : 'justify-end'
        }  flex mt-4 text-sm`}
      >
        {totalRows > 0 ? (
          <>
            <div className="">
              {totalLabel}{' '}
              {totalRows > 0
                ? totalRows.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })
                : '-'}{' '}
              รายการ
            </div>
          </>
        ) : (
          ''
        )}

        <div>
          <div className="mr-3 flex items-center">
            <button
              className=" bg-[#792024] border-none rounded-lg w-8 h-8 m-1 cursor-pointer"
              onClick={firstPage}
              disabled={currentPage === 1}
            >
              <div className="text-white text-sm">{'<<'}</div>
            </button>

            <button
              className=" bg-[#792024] border-none rounded-lg w-8 h-8 m-1 cursor-pointer"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              <div className="text-white text-sm">{'<'}</div>
            </button>

            <input
              className="bg-white rounded-lg w-auto h-9 m-1 text-center border border-[#792024]"
              type="number"
              min="1"
              max={totalPages}
              value={pageInputValue}
              onBlur={pageInputBlur}
              onChange={pageInputChange}
              onKeyDown={pageInputKeyDown}
            />

            <span className="text-2xl">/</span>

            <button className=" bg-[#792024] border-none rounded-lg w-auto h-8 m-1 cursor-pointer px-2">
              <div className="text-white text-sm">{totalPages}</div>
            </button>

            <button
              className=" bg-[#792024] border-none rounded-lg w-8 h-8 m-1 cursor-pointer"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <div className="text-white text-sm">{'>'}</div>
            </button>

            <button
              className=" bg-[#792024] border-none rounded-lg w-8 h-8 m-1 cursor-pointer"
              onClick={lastPage}
              disabled={currentPage === totalPages}
            >
              <div className="text-white text-sm">{'>>'}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paginator;
