import Image from 'next/image';
import React, { useState } from 'react';

export default function ServiceItem({ title, content, source }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-full card shadow-xl">
      <div className="w-full card-body">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-6 items-center">
            <div className="bg-accent bg-opacity-10 rounded-full w-12 h-12 flex justify-center items-center">
              <Image src={source} alt="illustration" width={32} height={32} />
            </div>
            <div className="text-xl font-medium">{title}</div>
          </div>
          <div>
            <button className="btn btn-ghost" onClick={() => setIsActive(!isActive)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                {isActive ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isActive && (
          <div className="flex flex-row gap-6 items-center">
            <div className="w-12 h-12"></div>
            <div>{content}</div>
          </div>
        )}
      </div>
    </div>
  );
}
