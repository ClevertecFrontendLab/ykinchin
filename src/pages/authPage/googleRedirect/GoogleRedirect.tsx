import { PATHS } from '@constants/PATHS';
import { useAppDispatch } from '@hooks/reduxHooks';
import { history } from '@redux/configure-store';
import { setAuth } from '@redux/slices/authSlice';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleRedirect: FC = () => {
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
