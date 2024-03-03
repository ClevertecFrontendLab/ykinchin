import { FC } from 'react';
import Lottie from 'react-lottie';

import animationData from './loader.json';

import s from './loader.module.scss';

const Loader: FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className={s.wrapper} data-test-id='loader'>
            <div className={s.loader}>
                <Lottie options={defaultOptions} />;
            </div>
        </div>
    );
};

export default Loader;
