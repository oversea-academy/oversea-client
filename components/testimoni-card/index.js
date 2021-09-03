import Image from 'next/image';
export default function TestimoniCard() {
  return (
    <div className="w-full relative">
      {/* <div className="absolute top-24 left-1 z-20 rounded-full h-20 w-20 bg-neutral-content shadow-lg cursor-pointer"></div> */}
      <button className="absolute top-28 left-1 z-20 btn btn-circle btn-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
          ></path>
        </svg>
      </button>
      <div className="mx-10 h-72 bg-neutral-content card shadow-xl px-10 py-5 flex flex-row gap-4">
        <div className="max-w-xs">
          <Image src="/human.jpg" alt="photo" width={250} height={250} className="rounded-xl" />
        </div>
        <div className="max-w-xs text-center px-3">
          <div className="py-3">``</div>
          <div className="text-xs pb-3">
            I really enjoyed all of the lessons with Oversea Academy,and thanks to the tutors, my English improved
            significantly. I need to work more on reading and listening due to my lack of focus but the tutor has helped
            me alot, the personal feed back on speaking is very helpful and the tutor gave me useful tricks on writing.
            Thank you!
          </div>
          <div className="text-sm font-medium text-primary">Sarah Zhafirah</div>
          <div className="text-xs">Student of IELTS Program</div>
        </div>
      </div>
      <button className="absolute top-28 right-1 z-20 btn btn-primary btn-circle btn-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
