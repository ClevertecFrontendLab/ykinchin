import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '@constants/PATHS';
import { useAppDispatch } from '@hooks/reduxHooks';
import { setAuth } from '@redux/authSlice/authSlice';
import { history } from '@redux/configure-store';

const GoogleRedirect = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(history.location.search);
        const accessToken = urlParams.get('accessToken');

        if (accessToken) {
            dispatch(setAuth({ accessToken, remeberCheck: true }));
            navigate(PATHS.main);
        } else {
            navigate(PATHS.main);
        }
    }, []);

    return null;
};

export default GoogleRedirect;
