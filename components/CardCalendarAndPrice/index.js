import Image from 'next/image';
import Button from '../Button';

export default function CardCalendarAndPrice({
  schedule_day = 'Setiap Senin, Rabu, dan Jum’at',
  schedule_time = 'Pukul 19.00-21.30 WIB',
  price = '1200000',
  discount = '801000',
  onClick
}) {
  /* Fungsi formatRupiah */
  var newPrice = parseInt(price) - parseInt(discount);
  newPrice = newPrice.toString();
  function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      var separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? 'IDR ' + rupiah : '';
  }

  return (
    <div className="container w-max mx-auto bg-white rounded-3xl border-none shadow-2xl">
      <div className="pt-16 pl-16 pr-16 pb-6">
        <div className="flex flex-col justify-center items-center text-center mb-14 ">
          <Image src="/images/cardCalendarAndPrice/calendar_img.png" alt="illustration" width={328} height={310} />
        </div>

        <div className="flex flex-col justify-center items-center text-center mb-14 ">
          <h2 className="text-primary text-2xl tracking-wider font-medium leading-7">Jadwal Pertemuan</h2>
          <div className="border-b-4 w-20 p-2 border-accent mb-5 "></div>
          <div className="flex w-full justify-start items-center flex-col">
            <div className="flex w-full justify-start mb-2 items-center ">
              <Image src="/icons/calendar_icon.png" alt="illustration" width={18} height={18} />
              <p className="px-6 text-primary text-lg font-normal tracking-wider leading-6 ">{`${schedule_day}`}</p>
            </div>
            <div className="flex w-full justify-start items-center ">
              <Image src="/icons/clock_icon.png" alt="illustration" width={18} height={18} />
              <p className="px-6 text-primary text-lg font-normal tracking-wider leading-6 ">{`${schedule_time}`}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center mb-14 ">
          <h2 className="text-primary text-2xl tracking-wider leading-7 font-medium">Biaya Kelas</h2>
          <div className="border-b-4 w-20 p-2 border-accent mb-5 "></div>
          <p className="text-gray-cloud text-lg tracking-wider font-medium line-through">
            {formatRupiah(price, 'IDR')}
          </p>
          <p className="text-primary text-3xl tracking-wider font-medium">{formatRupiah(newPrice, 'IDR')}</p>
        </div>

        <div className="flex justify-center">
          {/* import Component Button */}
          <Button title="Ambil Kelas" isDisabled={false} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
