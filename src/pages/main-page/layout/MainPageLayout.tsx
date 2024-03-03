import { FC } from 'react';

import Content from './content/Content';
import Header from './header/Header';

const MainPageLayout: FC = () => {
    return (
        <>
            <Header />
            <Content />
        </>
    );
};

export default MainPageLayout;
