import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import CustomButton from '@components/customButton/CustomButton';
import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import useMediaQuery from '@hooks/useMediaQuery';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';

const ErrorEmailNoExist: FC = () => {
    const prevLocation = usePrevLocation();
    const isMobile = useMediaQuery('(max-width:425px)');

    if (prevLocation !== PATHS.auth) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <ResultCard
            status='error'
            bodyStyle={{ padding: `${isMobile ? '38px 0' : '2px 0'}` }}
            resultTitle={
                <span style={{ whiteSpace: `${isMobile ? '' : 'nowrap'}` }}>
                    Такой e-mail не зарегистрирован
                </span>
            }
            resultDescription={
                <>
                    Мы не нашли в базе вашего e-mail. Попробуйте {!isMobile && <br />} войти с
                    другим e-mail.
                </>
            }
        >
            <CustomButton
                style={{ marginBottom: '-10px' }}
                onClick={() => history.replace(PATHS.auth)}
                type='primary'
                size='large'
                test='check-retry-button'
            >
                Попробовать снова
            </CustomButton>
        </ResultCard>
    );
};

export default ErrorEmailNoExist;
