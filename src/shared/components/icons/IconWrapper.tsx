import { ComponentType } from 'react';

import Icon, { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

interface IconProps extends Partial<CustomIconComponentProps> {
    icon: ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>;
}

const IconWrapper = ({ icon, ...props }: IconProps) => <Icon component={icon} {...props} />;
export default IconWrapper;
