import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ModalLogin from '../ModalLogin';
import styles from './Layout.module.css';
import { permissionRoutes } from '../../utils/permission-routes';

export default function Layout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');
  const userProfile = useSelector((state) => state.userProfile);
  const router = useRouter();

  function handleRouter() {
    const roles = userProfile ? userProfile.roles : [];
    const route = router.pathname;
    const pRoute = permissionRoutes.find((item) => item.route === route);
    console.log(pRoute, roles);
    if (pRoute && roles) {
      const isPermitted = pRoute.roles.some((item) => roles.some((val) => item == val));
      if (!isPermitted) router.push('/');
    } else {
      router.push('/');
    }
  }

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
    if (children !== displayChildren) {
      setTransitionStage('fadeOut');
    }
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <Navbar />
      <div
        onTransitionEnd={handleTransition}
        className={`${styles.content} 
        ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
      <Footer />
      <ModalLogin />
    </div>
  );
}
