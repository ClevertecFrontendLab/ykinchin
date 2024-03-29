import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { PATHS } from '@constants/PATHS';

type NavList = {
    path: string;
    breadcrumbName: string;
};

type Props = {
    className?: string;
};

const HeaderBreadcrumbs = ({ className }: Props) => {
    const { pathname } = useLocation();

    const breadcrumbItems: NavList[] = [
        { path: PATHS.feedbacks, breadcrumbName: 'Отзывы пользователей' },
    ];

    return (
        <Breadcrumb className={className}>
            <Breadcrumb.Item key={PATHS.main}>
                <Link to={PATHS.main}>Главная</Link>
            </Breadcrumb.Item>
            {breadcrumbItems.map(
                (item) =>
                    pathname.startsWith(item.path) && (
                        <Breadcrumb.Item key={item.path}>
                            <Link to={item.path}>{item.breadcrumbName}</Link>
                        </Breadcrumb.Item>
                    ),
            )}
        </Breadcrumb>
    );
};

export default HeaderBreadcrumbs;
