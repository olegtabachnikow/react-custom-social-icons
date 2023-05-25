import { CSSProperties, FC } from 'react';
import { SocialNetwork, SocialIconSize, Shapes } from './types';
interface SocialIconProps {
    onClick?: () => void;
    network: SocialNetwork;
    color?: string;
    size?: SocialIconSize | number;
    shape?: number | Shapes;
    styles?: CSSProperties;
}
declare const SocialIcon: FC<SocialIconProps>;
export default SocialIcon;
