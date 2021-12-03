import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Navbar from '../navbar';
import Footer from '../footer';
import ModalLogin from '../modal-login';
import styles from './Layout.module.css';
import store from '../../store';

export default function Layout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');

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
    if (children !== displayChildren) setTransitionStage('fadeOut');
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <div onTransitionEnd={handleTransition} className={`${styles.content} ${styles[transitionStage]}`}>
          {displayChildren}
        </div>
        <Footer />
        <ModalLogin />
      </Provider>
    </div>
  );
}
