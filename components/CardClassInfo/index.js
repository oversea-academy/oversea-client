import Image from 'next/image';
import Button from '../Button';
import React, { useState } from 'react';

export default function CardClassInfo({ name, description, price, image = '/images/cardClassInfo/default_image.png' }) {
  var btnOnCLick = (e) => {
    e.preventDefault();
    alert('Button Clicked');
  };

  return (
    <div className="max-w-xs bg-white rounded-3xl border-none shadow-lg mr-auto ml-auto mb-5 mt-5">
      <img className="rounded-t-3xl" src={image} alt="" />
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-primary text-2xl font-medium leading-8 line-clamp-2 w-1/2 mb-1 ">{name}</h2>
          <p className="text-primary text-xl ">{price}</p>
        </div>
        <p className="text-primary text-base italic w-4/5 mb-3">{description}</p>
        <div className="flex justify-center">
          {/* import Component Button */}
          <Button title="Enable" isDisabled={false} onClick={btnOnCLick} />
        </div>
      </div>
    </div>
  );
}
