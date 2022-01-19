import React, { useState } from 'react';
import { EventEmitter } from '../../utils/events';

export default function ClassOptions() {
  const [isFocused, setISFocused] = useState(0);

  function setBtnClassOptions(index) {
    let btn_class_options = document.getElementsByClassName('btn_class_options');
    setISFocused(index);
    for (let i = 0; i < btn_class_options.length; i++) {
      if (i === index) {
        btn_class_options[i].classList.add('from-primary');
        btn_class_options[i].classList.add('to-accent');
        btn_class_options[i].classList.add('text-primary-content');
      } else {
        btn_class_options[i].classList.remove('from-primary');
        btn_class_options[i].classList.remove('to-accent');
        btn_class_options[i].classList.remove('text-primary-content');
        btn_class_options[i].classList.add('text-primary');
        btn_class_options[i].classList.add('bg-gray-400');
      }
    }

    if (index == 0) {
      EventEmitter.dispatch('showOptionClass', 'semua');
    } else if (index == 1) {
      EventEmitter.dispatch('showOptionClass', 'ielts');
    } else if (index == 2) {
      EventEmitter.dispatch('showOptionClass', 'toefl');
    } else if (index == 3) {
      EventEmitter.dispatch('showOptionClass', 'basic');
    } else {
      EventEmitter.dispatch('showOptionClass', 'private');
    }
  }

  // test  dispatch Event

  EventEmitter.subscribe('showOptionClass', (data) => {
    console.log(data);
  });

  return (
    <div className="block justify-center w-full my-3 mx-2">
      <div className="inline-flex justify-center w-full ">
        <button
          onClick={() => setBtnClassOptions(0)}
          className="btn_class_options py-2 px-8 text-sm font-medium lg:text-xl sm:text-xs text-primary-content bg-gradient-to-r from-primary  to-accent rounded-l-full  hover:text-secondary-content hover:from-primary  hover:to-accent focus:from-primary  focus:to-accent focus:text-secondary-content active:from-primary  active:to-accent"
        >
          Semua Kelas
        </button>
        <button
          onClick={() => setBtnClassOptions(1)}
          className="btn_class_options py-2 px-8 text-sm font-medium lg:text-xl sm:text-xs text-primary bg-gradient-to-r bg-gray-400 hover:text-secondary-content hover:from-primary  hover:to-accent focus:from-primary  focus:to-accent focus:text-secondary-content active:from-primary  active:to-accent"
        >
          IELTS
        </button>
        <button
          onClick={() => setBtnClassOptions(2)}
          className="btn_class_options py-2 px-8 text-sm font-medium lg:text-xl sm:text-xs text-primary bg-gradient-to-r bg-gray-400 hover:text-secondary-content hover:from-primary  hover:to-accent focus:from-primary  focus:to-accent focus:text-secondary-content active:from-primary  active:to-accent"
        >
          TOEFL
        </button>
        <button
          onClick={() => setBtnClassOptions(3)}
          className="btn_class_options py-2 px-8 text-sm font-medium lg:text-xl sm:text-xs text-primary bg-gradient-to-r  bg-gray-400 hover:text-secondary-content hover:from-primary  hover:to-accent focus:from-primary  focus:to-accent focus:text-secondary-content active:from-primary  active:to-accent"
        >
          Basic
        </button>
        <button
          onClick={() => setBtnClassOptions(4)}
          className="btn_class_options py-2 px-8 text-sm font-medium lg:text-xl sm:text-xs text-primary bg-gradient-to-r  bg-gray-400 rounded-r-full hover:text-secondary-content hover:from-primary  hover:to-accent focus:from-primary  focus:to-accent focus:text-secondary-content active:from-primary  active:to-accent"
        >
          Private
        </button>
      </div>
    </div>
  );
}