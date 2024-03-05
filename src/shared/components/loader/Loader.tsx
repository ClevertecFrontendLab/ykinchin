import Lottie from 'react-lottie';

import animationData from './loader.json';

import styles from './loader.module.scss';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const Loader = () => (
    <div className={styles.wrapper} data-test-id='loader'>
        <div className={styles.loader}>
            <Lottie options={defaultOptions} />;
        </div>
    </div>
);

export default Loader;
