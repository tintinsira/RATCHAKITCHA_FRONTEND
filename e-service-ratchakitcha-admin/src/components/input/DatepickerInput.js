'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import dayTh from 'dayjs/locale/th';

try {
  dayjs.extend(buddhistEra);
  dayjs.locale(dayTh);
} catch (error) {
  console.warn(
    'Buddhist Era plugin not loaded, falling back to default dayjs.'
  );
}

const buddhistLocale = {
  ...dayTh,
  dateFormat: 'DD/MM/YYYY',
};
 
const isBuddhistYear = (year) => { 
  return year > 2500;
};
 
const formatToThaiBuddhistDate = (date) => {
  if (!date) return '';
 
  let dateObj;
 
  if (typeof date === 'string') { 
    let day, month, year;

    if (date.includes('/')) { 
      [day, month, year] = date.split('/');
      year = parseInt(year, 10);
 
      if (!isBuddhistYear(year)) { 
        year += 543;
      }

      return `${day}/${month}/${year}`;
    } else if (date.includes('-')) { 
      [year, month, day] = date.split('-');
      year = parseInt(year, 10);
 
      if (!isBuddhistYear(year)) {
        year += 543;
      }

      return `${day}/${month}/${year}`;
    }
 
    dateObj = dayjs(date, ['YYYY-MM-DD', 'DD/MM/YYYY']).toDate();
  } else { 
    dateObj = date;
  }
 
  return dayjs(dateObj).format('DD/MM/BBBB');
};

const DatepickerInput = ({
  labelText,
  placeholder,
  name,
  value,
  onChange,
  isDisable,
  isRequire = false,
  textSmall,
}) => {
  const [selectedDate, setSelectedDate] = useState();
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const inputRef = useRef();
  const containerRef = useRef(null);
  const calendarRef = useRef(null);
  const [renderAbove, setRenderAbove] = useState(false);

  useEffect(() => {
    if (isCalendarVisible && calendarRef.current) {
      const rect = calendarRef.current.getBoundingClientRect();
      const calendarHeight = rect.height;
      const spaceBelow = window.innerHeight - rect.top;
      const spaceAbove = rect.top;

      if (spaceBelow < calendarHeight && spaceAbove > calendarHeight) {
        setRenderAbove(true);
      } else {
        setRenderAbove(false);
      }
    }

    const handleClickOutside = (event) => {
      const isCalendarNavigation = event.target.closest(
        '.react-calendar__navigation'
      );
      const isCalendarView = event.target.closest(
        '.react-calendar__viewSelector'
      );
      const isCalendarTile = event.target.closest('.react-calendar__tile');
      if (isCalendarNavigation || isCalendarView || isCalendarTile) {
        return;
      }

      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsCalendarVisible(false);
      }
    };

    if (isCalendarVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCalendarVisible]);

  const handleChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      const formattedDate = formatToThaiBuddhistDate(date);
      onChange(formattedDate);
    }
    setIsCalendarVisible(false);
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  return (
    <div className="flex flex-col gap-2" ref={containerRef}>
      {labelText && (
        <label htmlFor="datepicker">
          {labelText}
          {isRequire && <span className="ml-1 text-[#D18585]">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder || 'dd/MM/yyyy'}
          name={name}
          value={value ? formatToThaiBuddhistDate(value) : ''}
          onFocus={toggleCalendarVisibility}
          disabled={isDisable}
          className={`${
            isDisable
              ? 'bg-[#EAEAEA] text-gray-600'
              : 'bg-[#FFFAFA] text-gray-800 border border-solid border-gray-300'
          } w-full p-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad9e71]`}
          autoComplete="true"
        />
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={(e) => {
            if (!isDisable) {
              toggleCalendarVisibility();
            }
          }}
        >
          <FaRegCalendarAlt size={20} />
        </div>
        {isCalendarVisible && (
          <>
            <div
              ref={calendarRef}
              className={`absolute left-0 w-full p-2 z-50 ${
                renderAbove ? 'bottom-full mb-2' : 'top-full mt-2'
              }`}
            >
              <Calendar
                selected={selectedDate}
                locale="th-TH"
                onChange={handleChange}
                value={
                  selectedDate
                    ? dayjs(selectedDate, 'DD/MM/YYYY').toDate()
                    : null
                }
              />
            </div>
          </>
        )}
      </div>
      {textSmall && <small className="text-muted">{textSmall}</small>}
    </div>
  );
};

export default DatepickerInput;
