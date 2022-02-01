import React from 'react';

export default function Subscribe() {
  return (
    <footer className="flex justify-center px-4 py-6 md:py-10 lg:py-12">
      <div className="container py-8">
        <h1 className="w-2/3 md:w-3/5 lg:w-1/2 mx-auto text-primary text-center md:text-left font-normal text-lg md:text-2xl lg:text-4xl">
          Yuk tetap update info kelas dan beasiswa oversea lainnya!
        </h1>

        <div className="flex justify-center mt-6">
          <div
            className="
              relative rounded-full
              w-2/3 md:w-3/5 lg:w-1/2
              md:focus-within:ring
              md:focus-within:ring-accent
              md:focus-within:ring-opacity-40
            "
          >
            <form
              action="https://academy.us14.list-manage.com/subscribe/post?u=ee6ef6969f83393d6b9d24455&amp;id=7d0e17a00a"
              method="post"
              className="flex flex-wrap md:flex-row md:border-2 rounded-full border-primary"
              target="_blank"
              noValidate
            >
              <input
                type="email"
                required
                placeholder="subscribe email"
                name="EMAIL"
                className="
                  rounded-full
                  w-full md:w-2/3
                  mb-2 md:my-1 py-2 px-8 text-gray-700 text-sm
                  border-2 md:border-none
                  bg-transparent appearance-none focus:outline-none focus:placeholder-transparent
                "
              />
              <button
                type="submit"
                className="
                  static md:absolute top-0 right-0 position
                  p-2 rounded-full
                  w-full mx-auto md:w-1/3 h-full
                  text-sm text-primary-content font-medium italic
                  bg-gradient-to-r from-primary to-accent
                  hover:from-secondary hover:to-accent
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
