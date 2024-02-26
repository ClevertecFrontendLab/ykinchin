import { FC } from 'react';
import Lottie from 'react-lottie';

import styles from './loader.module.scss';

import animationData from './loader.json';

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
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <Lottie options={defaultOptions} />;
            </div>
        </div>
    );
};

export default Loader;
