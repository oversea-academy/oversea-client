import Image from 'next/image';
import React, { useState } from 'react';
import styles from './ClassOption.module.css';

export default function ClassOptions() {
  const [isFocused, setISFocused] = useState(0);

  function setBtnClassOptions(index) {
    var btn_class_options = document.getElementsByClassName('btn_class_options');
    setISFocused(index);
    for (var i = 0; i < btn_class_options.length; i++) {
      if (i === index) {
        btn_class_options[i].classList.add('from-primary');
        btn_class_options[i].classList.add('via-secondary');
        btn_class_options[i].classList.add('to-accent');
        btn_class_options[i].classList.add('text-primary-content');
      } else {
        btn_class_options[i].classList.remove('from-primary');
        btn_class_options[i].classList.remove('via-secondary');
        btn_class_options[i].classList.remove('to-accent');
        btn_class_options[i].classList.remove('text-primary-content');
        btn_class_options[i].classList.add('text-primary');
        btn_class_options[i].classList.add('bg-stone-400');
      }
    }
  }
  return (
    <div className="block justify-center w-full my-3 mx-2">
      <h2 className="text-center font-semibold text-4xl text-primary my-2">Pilihan Kelas</h2>
      <div className="inline-flex justify-center w-full">
        <div className={`${styles.garisBawah}`}> </div>
      </div>

      <div className="inline-flex justify-center w-full ">
        <button
          onClick={() => setBtnClassOptions(0)}
          className="btn_class_options py-2 px-6 text-sm font-medium lg:text-xl sm:text-xs text-primary-content bg-gradient-to-r from-primary via-secondary to-accent rounded-l-full  hover:text-secondary-content hover:from-primary hover:via-secondary hover:to-accent focus:from-primary focus:via-secondary focus:to-accent focus:text-secondary-content active:from-primary active:via-secondary active:to-accent"
        >
          Semua Kelas
        </button>
        <button
          onClick={() => setBtnClassOptions(1)}
          className="btn_class_options py-2 px-6 text-sm font-medium lg:text-xl sm:text-xs text-primary bg-gradient-to-r bg-stone-400 hover:text-secondary-content hover:from-primary hover:via-secondary hover:to-accent focus:from-primary focus:via-secondary focus:to-accent focus:text-secondary-content active:from-primary active:via-secondary active:to-accent"
        >
          EILTS
        </button>
        <button
          onClick={() => setBtnClassOptions(2)}
          className="btn_class_options py-2 px-6 text-sm font-medium lg:text-xl sm:text-xs text-primary bg-gradient-to-r bg-stone-400 hover:text-secondary-content hover:from-primary hover:via-secondary hover:to-accent focus:from-primary focus:via-secondary focus:to-accent focus:text-secondary-content active:from-primary active:via-secondary active:to-accent"
        >
          TOEFL
        </button>
        <button
          onClick={() => setBtnClassOptions(3)}
          className="btn_class_options py-2 px-6 text-sm font-medium lg:text-xl sm:text-xs text-primary bg-gradient-to-r bg-stone-400 hover:text-secondary-content hover:from-primary hover:via-secondary hover:to-accent focus:from-primary focus:via-secondary focus:to-accent focus:text-secondary-content active:from-primary active:via-secondary active:to-accent"
        >
          Basic
        </button>
        <button
          onClick={() => setBtnClassOptions(4)}
          className="btn_class_options py-2 px-6 text-sm font-medium lg:text-xl sm:text-xs text-primary bg-gradient-to-r bg-stone-400 rounded-r-full hover:text-secondary-content hover:from-primary hover:via-secondary hover:to-accent focus:from-primary focus:via-secondary focus:to-accent focus:text-secondary-content active:from-primary active:via-secondary active:to-accent"
        >
          Private
        </button>
      </div>
    </div>
  );
}
