import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../Navbar';
import ModalLogin from '../ModalLogin';
import styles from './Layout.module.css';
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  const [isAdminPage, setIsAdminPage] = useState(false);

  const router = useRouter();

  function handleTransition() {
    if (transitionStage === 'fadeOut') {
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }
  }

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    const pathname = router.pathname;

    if (pathname.includes('/admin')) {
      setIsAdminPage(true);
    }
  }, [router]);

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('fadeOut');
    }
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      {isAdminPage && <Navbar />}
      {/* <div
        onTransitionEnd={handleTransition}
        className={`${styles.content} 
        ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div> */}
      <div>{children}</div>
      <ModalLogin />
      <ToastContainer className="mt-16 text-xs" />
    </div>
  );
}
