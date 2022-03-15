import Button from '../Button';
import React from 'react';

const defaultImage = '/images/cardClassInfo/default_image.png';

export default function CardClassInfo({ name, description, price, image, onClick }) {
  const handlePrice = (price) => {
    if (price > 0) {
      const result = Math.round(price / 1000);
      return `${result}k`;
    }
    return 0;
  };

  return (
    <div className="w-64 bg-white rounded-3xl border-none shadow-lg">
      <img className="rounded-t-3xl h-56 w-full object-cover" src={image ? image : defaultImage} alt="Image Class" />
      <div className="p-5">
        <div className="flex justify-between h-20">
          <h2 className="text-primary text-xl font-medium leading-8 line-clamp-2 w-3/4 mb-1 ">{name}</h2>
          <p className="text-primary text-lg ">{handlePrice(price)}</p>
        </div>
        <p className="text-primary text-base italic w-4/5 mb-3">{description}</p>
        <div className="flex justify-center">
          {/* import Component Button */}
          <Button title="Lihat Kelas" isDisabled={false} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
