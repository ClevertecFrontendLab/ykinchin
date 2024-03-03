import { useEffect, useState } from 'react';

import { useAppSelector } from './reduxHooks';

const useAuth = () => {
    const { isAuth } = useAppSelector((state) => state.auth);

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const userAuth: string | null = localStorage.getItem('user');
        return !!userAuth;
    });

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
