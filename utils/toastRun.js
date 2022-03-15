import { toast } from 'react-toastify';

class ToastRun {
  constructor() {
    this.toast = toast;
    this.options = {
      position: 'top-right',
      autoClose: 5000,
      theme: 'colored',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    };
  }

  error(message) {
    this.toast.error(message, {
      ...this.options,
      icon: () => (
        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"
          />
        </svg>
      )
    });
  }

  success(message) {
    this.toast.success(message, {
      ...this.options,
      icon: () => (
        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"
          />
        </svg>
      )
    });
  }
}

const toastRun = new ToastRun();

export default toastRun;
