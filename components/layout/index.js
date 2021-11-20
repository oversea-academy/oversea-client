import Navbar from '../navbar';
import Footer from '../footer';
import ModalLogin from '../modal-login';
import { useState, memo, useEffect } from 'react';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  function handleTransition() {
    if (transitionStage === 'fadeOut') {
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }
  }

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut');
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <Navbar />
      <div onTransitionEnd={handleTransition} className={`${styles.content} ${styles[transitionStage]}`}>
        {displayChildren}
      </div>
      <Footer />
      <ModalLogin />
    </div>
  );
}
