import React, { CSSProperties, FC, SVGProps } from 'react';
import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Tiktok } from './assets/tiktok.svg';
import { ReactComponent as Google } from './assets/google.svg';
import { ReactComponent as Telegram } from './assets/telegram.svg';
import { ReactComponent as Pinterest } from './assets/pinterest.svg';
import { ReactComponent as Snapchat } from './assets/snapchat.svg';
import { ReactComponent as Youtube } from './assets/youtube.svg';
import { ReactComponent as Reddit } from './assets/reddit.svg';
import { ReactComponent as Discord } from './assets/discord.svg';
import { ReactComponent as Skype } from './assets/skype.svg';
import { ReactComponent as Zoom } from './assets/zoom.svg';
import { ReactComponent as Vimeo } from './assets/vimeo.svg';
import { ReactComponent as VK } from './assets/vk.svg';
import { ReactComponent as Twitch } from './assets/twitch.svg';
import { ReactComponent as Messenger } from './assets/messenger.svg';
import { ReactComponent as WhatsApp } from './assets/whatsapp.svg';
import { ReactComponent as GoogleMeet } from './assets/google-meet.svg';
import { ReactComponent as Tumblr } from './assets/tumblr.svg';
import { ReactComponent as GoogleMaps } from './assets/google-maps.svg';
import { ReactComponent as Behance } from './assets/behance.svg';
import { ReactComponent as Gmail } from './assets/gmail.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';
import { ReactComponent as Spotify } from './assets/spotify.svg';
import { ReactComponent as SoundCloud } from './assets/soundcloud.svg';
import { ReactComponent as Patreon } from './assets/patreon.svg';
import { ReactComponent as Tinder } from './assets/tinder.svg';
import { ReactComponent as Trustpilot } from './assets/trustpilot.svg';
import { ReactComponent as Apple } from './assets/apple.svg';
import { ReactComponent as GoogleCalendar } from './assets/google-calendar.svg';
import { ReactComponent as Dribbble } from './assets/dribbble.svg';
import { ReactComponent as GoogleAnalytics } from './assets/googleAnalytics.svg';
import { ReactComponent as FacebookPixel } from './assets/facebookPixel.svg';

export type SocialIconSize = 'big' | 'medium' | 'small';

export type SocialNetwork =
  | 'zoom'
  | 'discord'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'whatsapp'
  | 'vk'
  | 'linkedin'
  | 'vimeo'
  | 'youtube'
  | 'tumblr'
  | 'skype'
  | 'pinterest'
  | 'behance'
  | 'dribbble'
  | 'google-analytics'
  | 'facebook-pixel'
  | 'reddit'
  | 'messenger'
  | 'snapchat'
  | 'apple'
  | 'telegram'
  | 'google'
  | 'tiktok'
  | 'spotify'
  | 'trustpilot'
  | 'twitch'
  | 'google-meet'
  | 'google-maps'
  | 'gmail'
  | 'soundcloud'
  | 'patreon'
  | 'tinder'
  | 'google-calendar';

export type Shapes = 'square' | 'round' | 'rounded';

const getSocialNetworkIcon = (
  social: SocialNetwork
): React.FunctionComponent<SVGProps<SVGSVGElement>> | undefined => {
  switch (social) {
    case 'facebook':
      return Facebook;
    case 'instagram':
      return Instagram;
    case 'twitter':
      return Twitter;
    case 'discord':
      return Discord;
    case 'twitch':
      return Twitch;
    case 'google-maps':
      return GoogleMaps;
    case 'whatsapp':
      return WhatsApp;
    case 'vk':
      return VK;
    case 'google-meet':
      return GoogleMeet;
    case 'tinder':
      return Tinder;
    case 'linkedin':
      return LinkedIn;
    case 'vimeo':
      return Vimeo;
    case 'youtube':
      return Youtube;
    case 'tumblr':
      return Tumblr;
    case 'skype':
      return Skype;
    case 'pinterest':
      return Pinterest;
    case 'zoom':
      return Zoom;
    case 'behance':
      return Behance;
    case 'reddit':
      return Reddit;
    case 'messenger':
      return Messenger;
    case 'snapchat':
      return Snapchat;
    case 'google-calendar':
      return GoogleCalendar;
    case 'google-analytics':
      return GoogleAnalytics;
    case 'facebook-pixel':
      return FacebookPixel;
    case 'dribbble':
      return Dribbble;
    case 'soundcloud':
      return SoundCloud;
    case 'telegram':
      return Telegram;
    case 'google':
      return Google;
    case 'tiktok':
      return Tiktok;
    case 'gmail':
      return Gmail;
    case 'spotify':
      return Spotify;
    case 'patreon':
      return Patreon;
    case 'trustpilot':
      return Trustpilot;
    case 'apple':
      return Apple;
  }
};

const computeSize = (size?: number | SocialIconSize): number => {
  if (size === 'big') return 64;
  else if (size === 'medium') return 48;
  else if (size === 'small') return 32;
  if (typeof size === 'number') return size;
  else return 48;
};

interface SocialIconProps {
  onClick?: () => void;
  network: SocialNetwork;
  color?: string;
  size?: SocialIconSize | number;
  shape?: number | Shapes;
  styles?: CSSProperties;
}

const SocialIcon: FC<SocialIconProps> = ({
  network,
  size,
  shape,
  color,
  onClick,
  styles,
}) => {
  const RenderedIcon:
    | React.FunctionComponent<SVGProps<SVGSVGElement>>
    | undefined = getSocialNetworkIcon(network);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    !!onClick && onClick();
  };

  const getShape = (shape?: number | Shapes): number => {
    if (typeof shape === 'number') return shape;
    else if (shape === 'square') return 0;
    else if (shape === 'round') return 50;
    else return 12;
  };
  const isColored = color ? { fill: color } : {};
  return (
    <div
      onClick={handleClick}
      style={{
        width: computeSize(size),
        height: computeSize(size),
        borderRadius: getShape(shape),
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.15)',
        ...styles,
      }}
    >
      {RenderedIcon && (
        <RenderedIcon
          width={computeSize(size)}
          height={computeSize(size)}
          {...isColored}
        />
      )}
    </div>
  );
};

export default SocialIcon;
