import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { accountRepository } from '../../repositories';
import { setSigned } from '../../store/actions/userSignedAction';
import { setProfile } from '../../store/actions/userProfileAction';
import { setRoles } from '../../store/actions/userRolesAction';

const authenticatedRoute = (Component = null, options = {}) => {
  return function AuthenticatedRoute() {
    const [loading, setLoading] = useState(true);
    const userRoles = useSelector((state) => state.userRoles);
    const userSigned = useSelector((state) => state.userSigned.value);
    const router = useRouter();
    const dispatch = useDispatch();

    async function getProfile() {
      const response = await accountRepository.getProfile();
      if (response?.status) {
        dispatch(setSigned());
        dispatch(setProfile(response.data));
        dispatch(setRoles(response.data.roles));
      } else {
        window.localStorage.removeItem('AUTH');
        router.push(options.pathAfterFailure || '/');
      }
    }

    function routePermission() {
      if (options.role === undefined || userRoles.some((item) => item === options.role)) {
        setLoading(false);
      } else {
        router.push(options.pathAfterFailure || '/');
      }
    }

    useEffect(() => {
      if (userSigned) {
        routePermission();
      } else {
        getProfile();
      }
    }, [loading, setLoading, userRoles, userSigned]);

    if (loading) {
      return <div />;
    }

    return <Component />;
  };
};

export default authenticatedRoute;
