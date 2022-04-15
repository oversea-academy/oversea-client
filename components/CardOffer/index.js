export default function CardOffer() {
  return (
    <div className="container px-6 lg:px-11 py-6 mx-auto rounded-3xl shadow-xl md:w-4/5 lg:w-4/5 bg-base-100">
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10  lg:grid-cols-3">
        <div className="px-2">
          <div className="inline-flex">
            <svg
              className="mt-4 mr-4 w-4 md:w-6 lg:w-8"
              viewBox="0 0 41 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 24C27.432 24 29 25.568 29 27.5L28.998 29.424C29.232 33.804 25.976 36.018 20.134 36.018C14.314 36.018 11 33.838 11 29.5V27.5C11 25.568 12.568 24 14.5 24H25.5ZM25.5 27H14.5C14.3674 27 14.2402 27.0527 14.1464 27.1464C14.0527 27.2402 14 27.3674 14 27.5V29.5C14 31.852 15.774 33.018 20.134 33.018C24.47 33.018 26.124 31.89 26 29.504V27.5C26 27.3674 25.9473 27.2402 25.8536 27.1464C25.7598 27.0527 25.6326 27 25.5 27ZM3.5 14H12.252C12 14.9791 11.9355 15.997 12.062 17H3.5C3.36739 17 3.24021 17.0527 3.14645 17.1464C3.05268 17.2402 3 17.3674 3 17.5V19.5C3 21.852 4.774 23.018 9.134 23.018C10.058 23.018 10.86 22.966 11.548 22.864C10.4037 23.589 9.56802 24.7117 9.202 26.016L9.134 26.018C3.314 26.018 0 23.838 0 19.5V17.5C0 15.568 1.568 14 3.5 14ZM36.5 14C38.432 14 40 15.568 40 17.5L39.998 19.424C40.232 23.804 36.976 26.018 31.134 26.018L30.796 26.014C30.4189 24.6741 29.5486 23.5265 28.36 22.802C29.134 22.946 30.054 23.018 31.134 23.018C35.47 23.018 37.124 21.89 37 19.504V17.5C37 17.3674 36.9473 17.2402 36.8536 17.1464C36.7598 17.0527 36.6326 17 36.5 17H27.94C28.0638 15.9968 27.9986 14.9793 27.748 14H36.5ZM20 10C20.7879 10 21.5681 10.1552 22.2961 10.4567C23.0241 10.7583 23.6855 11.2002 24.2426 11.7574C24.7998 12.3145 25.2417 12.9759 25.5433 13.7039C25.8448 14.4319 26 15.2121 26 16C26 16.7879 25.8448 17.5681 25.5433 18.2961C25.2417 19.0241 24.7998 19.6855 24.2426 20.2426C23.6855 20.7998 23.0241 21.2417 22.2961 21.5433C21.5681 21.8448 20.7879 22 20 22C18.4087 22 16.8826 21.3679 15.7574 20.2426C14.6321 19.1174 14 17.5913 14 16C14 14.4087 14.6321 12.8826 15.7574 11.7574C16.8826 10.6321 18.4087 10 20 10ZM20 13C19.606 13 19.2159 13.0776 18.8519 13.2284C18.488 13.3791 18.1573 13.6001 17.8787 13.8787C17.6001 14.1573 17.3791 14.488 17.2284 14.8519C17.0776 15.2159 17 15.606 17 16C17 16.394 17.0776 16.7841 17.2284 17.1481C17.3791 17.512 17.6001 17.8427 17.8787 18.1213C18.1573 18.3999 18.488 18.6209 18.8519 18.7716C19.2159 18.9224 19.606 19 20 19C20.7956 19 21.5587 18.6839 22.1213 18.1213C22.6839 17.5587 23 16.7956 23 16C23 15.2044 22.6839 14.4413 22.1213 13.8787C21.5587 13.3161 20.7956 13 20 13ZM9 0C10.5913 0 12.1174 0.632141 13.2426 1.75736C14.3679 2.88258 15 4.4087 15 6C15 7.5913 14.3679 9.11742 13.2426 10.2426C12.1174 11.3679 10.5913 12 9 12C7.4087 12 5.88258 11.3679 4.75736 10.2426C3.63214 9.11742 3 7.5913 3 6C3 4.4087 3.63214 2.88258 4.75736 1.75736C5.88258 0.632141 7.4087 0 9 0ZM31 0C32.5913 0 34.1174 0.632141 35.2426 1.75736C36.3679 2.88258 37 4.4087 37 6C37 7.5913 36.3679 9.11742 35.2426 10.2426C34.1174 11.3679 32.5913 12 31 12C29.4087 12 27.8826 11.3679 26.7574 10.2426C25.6321 9.11742 25 7.5913 25 6C25 4.4087 25.6321 2.88258 26.7574 1.75736C27.8826 0.632141 29.4087 0 31 0ZM9 3C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6C6 6.79565 6.31607 7.55871 6.87868 8.12132C7.44129 8.68393 8.20435 9 9 9C9.79565 9 10.5587 8.68393 11.1213 8.12132C11.6839 7.55871 12 6.79565 12 6C12 5.20435 11.6839 4.44129 11.1213 3.87868C10.5587 3.31607 9.79565 3 9 3ZM31 3C30.2044 3 29.4413 3.31607 28.8787 3.87868C28.3161 4.44129 28 5.20435 28 6C28 6.79565 28.3161 7.55871 28.8787 8.12132C29.4413 8.68393 30.2044 9 31 9C31.7956 9 32.5587 8.68393 33.1213 8.12132C33.6839 7.55871 34 6.79565 34 6C34 5.20435 33.6839 4.44129 33.1213 3.87868C32.5587 3.31607 31.7956 3 31 3Z"
                fill="#005365"
              />
            </svg>
            <h1 className="mt-4 font-normal text-primary text-lg md:text-xl lg:text-2xl">Expert Tutor Terbaik</h1>
          </div>
          <p className="mt-2 lg:mt-4 text-primary font-light text-base md:text-lg lg:text-lg">
            Tutor Oversea Academy yang kompeten, fun, dan memiliki international exposure
          </p>
        </div>

        <div className="px-2">
          <div className="inline-flex">
            <svg
              className="mt-4 mr-4 w-4 md:w-6 lg:w-8"
              viewBox="0 0 30 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4.61913e-07C4.4087 4.61913e-07 2.88258 0.632142 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6V36C0 37.5913 0.632141 39.1174 1.75736 40.2426C2.88258 41.3679 4.4087 42 6 42H24C25.5913 42 27.1174 41.3679 28.2426 40.2426C29.3679 39.1174 30 37.5913 30 36V13.242C29.9989 12.0489 29.5242 10.9051 28.68 10.062L19.941 1.317C19.5229 0.8992 19.0267 0.56785 18.4805 0.341877C17.9344 0.115903 17.3491 -0.000267327 16.758 4.61913e-07H6ZM3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H15V10.5C15 11.6935 15.4741 12.8381 16.318 13.682C17.1619 14.5259 18.3065 15 19.5 15H27V36C27 36.7957 26.6839 37.5587 26.1213 38.1213C25.5587 38.6839 24.7956 39 24 39H6C5.20435 39 4.44129 38.6839 3.87868 38.1213C3.31607 37.5587 3 36.7957 3 36V6ZM26.379 12H19.5C19.1022 12 18.7206 11.842 18.4393 11.5607C18.158 11.2794 18 10.8978 18 10.5V3.621L26.379 12Z"
                fill="#005365"
              />
            </svg>
            <h1 className="mt-4 font-normal text-primary text-lg md:text-xl lg:text-2xl">Kurikulum Terbaik</h1>
          </div>
          <p className="mt-2 lg:mt-4 text-primary font-light text-base md:text-lg lg:text-lg">
            E-modul dan pembahasan materi yang lengkap dengan kurikulum terbaik disertai exercise rutin
          </p>
        </div>

        <div className="px-2">
          <div className="inline-flex">
            <svg
              className="mt-4 mr-4 w-4 md:w-6 lg:w-8"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.98 0C8.94 0 0 8.96 0 20C0 31.04 8.94 40 19.98 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 19.98 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36ZM19.56 10H19.44C18.64 10 18 10.64 18 11.44V20.88C18 21.58 18.36 22.24 18.98 22.6L27.28 27.58C27.96 27.98 28.84 27.78 29.24 27.1C29.3404 26.9381 29.4072 26.7576 29.4364 26.5693C29.4657 26.381 29.4567 26.1887 29.41 26.0039C29.3633 25.8192 29.28 25.6457 29.1649 25.4938C29.0498 25.342 28.9053 25.2148 28.74 25.12L21 20.52V11.44C21 10.64 20.36 10 19.56 10Z"
                fill="#005365"
              />
            </svg>
            <h1 className="mt-4 font-normal text-primary text-lg md:text-xl lg:text-2xl">Pertemuan Fleksibel</h1>
          </div>
          <p className="mt-2 lg:mt-4 text-primary font-light text-base md:text-lg lg:text-lg">
            Jumlah pertemuan disesuaikan dengan kebutuhan student dan support group 24/7
          </p>
        </div>
      </div>
    </div>
  );
}
