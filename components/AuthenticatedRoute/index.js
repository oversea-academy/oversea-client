import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { AccountRepo } from '../../repositories';
import { setSigned } from '../../store/actions/userSignedAction';
import { setProfile } from '../../store/actions/userProfileAction';
import { setRoles } from '../../store/actions/userRolesAction';

const authenticatedRoute = (Component = null, options = {}) => {
  return function AuthenticatedRoute() {
    const [loading, setLoading] = useState(true);
    const userRoles = useSelector((state) => state.userRoles);
    const userSigned = useSelector((state) => state.userSigned.value);
    const userProfile = useSelector((state) => state.userProfile);
    const dispatch = useDispatch();
    const router = useRouter();

    const getProfile = useCallback(async () => {
      const response = await AccountRepo.getProfile();
      if (response?.status) {
        dispatch(setProfile(response.data));
        dispatch(setRoles(response.data.roles));
        dispatch(setSigned());
      } else {
        window.localStorage.removeItem('AUTH');
        window.location.replace(options.pathAfterFailure || '/');
      }
    }, []);

    const routePermission = useCallback(() => {
      if (options.role === undefined || userRoles.some((item) => item === options.role)) {
        setLoading(false);
      } else {
        router.push(options.pathAfterFailure || '/');
      }
    }, [userRoles, setLoading]);

    useEffect(() => {
      if (userSigned) {
        if (userProfile.email) routePermission();
      } else {
        getProfile();
      }
    }, [userSigned, routePermission, getProfile]);

    if (loading) {
      return <div className="min-h-screen" />;
    }

    return <Component />;
  };
};

export default authenticatedRoute;
