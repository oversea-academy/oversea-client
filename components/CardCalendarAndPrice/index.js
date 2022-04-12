import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import DayJs from 'dayjs';
import Button from '../Button';
import { formatCurrency } from '../../utils/helper';

export default function CardCalendarAndPrice({
  scheduleDay = 'Setiap Senin, Rabu, dan Jum’at',
  scheduleTime = 'Pukul 19.00-21.30 WIB',
  price = '1200000',
  priceNormal = '1200000',
  closedAt = '',
  onClick
}) {
  const [isDisabled, setIsDisabled] = useState(false);

  const formatDate = (date) => {
    return DayJs(date).format('DD MMM YYYY');
  };

  useEffect(() => {
    if (closedAt) {
      const dateClosed = new Date(closedAt);
      const dateNow = new Date();
      if (dateNow > dateClosed) {
        setIsDisabled(true);
      }
    } else {
      setIsDisabled(false);
    }
  }, [closedAt]);

  return (
    <div className="container mx-auto md:rounded-3xl border-none md:shadow-2xl md:bg-base-100">
      <div className="pt-8 md:pt-16 px-6 md:px-16 pb-6">
        <div className="flex flex-col justify-center items-center text-center mb-14 ">
          <h2 className="text-primary text-xl md:text-2xl tracking-wider font-medium leading-7">Jadwal Pertemuan</h2>
          <div className="border-b-4 w-20 p-2 border-accent mb-5 "></div>
          <div className="flex w-full justify-start items-center flex-col">
            <div className="flex w-full justify-start mb-2 items-center ">
              <Image src="/icons/calendar_icon.png" alt="illustration" width={18} height={18} />
              <p className="pl-6 text-primary text-base md:text-lg font-normal tracking-wider leading-6 text-left">{`${scheduleDay}`}</p>
            </div>
            <div className="flex w-full justify-start items-center ">
              <Image src="/icons/clock_icon.png" alt="illustration" width={18} height={18} />
              <p className="pl-6 text-primary text-base md:text-lg font-normal tracking-wider leading-6 text-left">{`${scheduleTime}`}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center mb-14 ">
          <h2 className="text-primary text-xl md:text-2xl tracking-wider leading-7 font-medium">Biaya Kelas</h2>
          <div className="border-b-4 w-20 p-2 border-accent mb-5 "></div>
          <p className="text-gray-cloud text-lg tracking-wider font-medium line-through">
            {formatCurrency(priceNormal, 'IDR')}
          </p>
          <p className="text-primary text-3xl tracking-wider font-medium">{formatCurrency(price, 'IDR')}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Button title="Ambil Kelas" isDisabled={isDisabled} onClick={onClick} />
          {isDisabled && <span className="text-sm text-error font-semibold">Masa pendaftaran kelas berakhir</span>}
          {!isDisabled && closedAt && (
            <span className="text-sm text-primary font-semibold">{`Pendaftaran sampai ${formatDate(closedAt)}`}</span>
          )}
        </div>
      </div>
    </div>
  );
}
