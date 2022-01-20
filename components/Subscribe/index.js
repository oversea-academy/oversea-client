import React, { useState } from 'react';

export default function Subscribe() {
    const [email, setEmail] = useState('');

    var btnOnCLick = (e) => {
        e.preventDefault();
        (email == "")
            ? alert("Masukkan email kamu!")
            : alert(`${email} berhasil subscribe!`);
    };

    return (
        <footer className="flex justify-center px-4">
            <div className="container py-8">
                <h1 className="w-2/3 md:w-3/5 lg:w-1/2 mx-auto text-primary font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Yuk tetap update info kelas dan beasiswa oversea lainnya!
                </h1>

                <div className="flex justify-center mt-6">
                    <div className="
                        relative rounded-full
                        w-2/3 md:w-3/5 lg:w-1/2
                        md:focus-within:ring
                        md:focus-within:ring-accent
                        md:focus-within:ring-opacity-40">
                        <form className="flex flex-wrap md:flex-row md:border-2 rounded-full border-primary">
                            <input
                                type="email"
                                required
                                placeholder="subscribe email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="
                                rounded-full
                                w-full md:w-2/3
                                mb-2 md:my-1 py-2 px-8 text-gray-700 text-sm
                                border-2 md:border-none
                                bg-transparent appearance-none focus:outline-none focus:placeholder-transparent"
                            />
                            <button
                                onClick={btnOnCLick}
                                className="
                                static md:absolute top-0 right-0 position
                                p-2 rounded-full
                                w-full mx-auto md:w-1/3 h-full
                                text-sm text-primary-content font-medium
                                bg-gradient-to-r from-primary to-accent
                                hover:from-secondary hover:to-accent
                            ">
                                subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}