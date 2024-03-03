import { ComponentType, FC } from 'react';

import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

interface IconProps extends Partial<CustomIconComponentProps> {
    icon: ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>;
}

const IconWrapper: FC<IconProps> = ({ icon, ...props }) => <Icon component={icon} {...props} />;
export default IconWrapper;
