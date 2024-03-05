import { useEffect, useState } from 'react';

import { selectIsAuth } from '@redux/authSlice/selectors';

import { useAppSelector } from './reduxHooks';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const userAuth: string | null = localStorage.getItem('user');
        return !!userAuth;
    });

    const isAuth = useAppSelector(selectIsAuth);

    useEffect(() => {
        const onStorageChangeHandler = () => {
            const userAuth: string | null = localStorage.getItem('user');
            setIsAuthenticated(!!userAuth);
        };

        window.addEventListener('storage', onStorageChangeHandler);

        return () => {
            window.removeEventListener('storage', onStorageChangeHandler);
        };
    }, []);

    return isAuthenticated || isAuth;
};

export default useAuth;
