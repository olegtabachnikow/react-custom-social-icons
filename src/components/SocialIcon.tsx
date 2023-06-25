import React, { CSSProperties, FC } from 'react'

import { Apple } from './Apple'
import { Behance } from './Behance'
import { Discord } from './Discord'
import { Dribbble } from './Dribbble'
import { Facebook } from './Facebook'
import { FacebookPixel } from './FacebookPixel'
import { Github } from './Github'
import { Gmail } from './Gmail'
import { Google } from './Google'
import { GoogleAnalytics } from './GoogleAnalytics'
import { GoogleCalendar } from './GoogleCalendar'
import { GoogleMaps } from './GoogleMaps'
import { GoogleMeet } from './GoogleMeet'
import { Instagram } from './Instagram'
import { LinkedIn } from './LinkedIn'
import { Messenger } from './Messenger'
import { Patreon } from './Patreon'
import { Pinterest } from './Pinterest'
import { Reddit } from './Reddit'
import { Skype } from './Skype'
import { Snapchat } from './Snapchat'
import { SoundCloud } from './SoundCloud'
import { Spotify } from './Spotify'
import { Telegram } from './Telegram'
import { Tiktok } from './Tiktok'
import { Tinder } from './Tinder'
import { Trustpilot } from './Trustpilot'
import { Tumblr } from './Tumblr'
import { Twitch } from './Twitch'
import { Twitter } from './Twitter'
import { Vimeo } from './Vimeo'
import { VK } from './VK'
import { WhatsApp } from './WhatsApp'
import { Youtube } from './Youtube'
import { Zoom } from './Zoom'

import { SocialIconSize, Shapes, SocialNetwork, IconProps } from '../types'

const getSocialNetworkIcon = (social: SocialNetwork): React.FC<IconProps> | undefined => {
  switch (social) {
    case 'facebook':
      return Facebook
    case 'instagram':
      return Instagram
    case 'twitter':
      return Twitter
    case 'discord':
      return Discord
    case 'twitch':
      return Twitch
    case 'github':
      return Github
    case 'google-maps':
      return GoogleMaps
    case 'whatsapp':
      return WhatsApp
    case 'vk':
      return VK
    case 'google-meet':
      return GoogleMeet
    case 'tinder':
      return Tinder
    case 'linkedin':
      return LinkedIn
    case 'vimeo':
      return Vimeo
    case 'youtube':
      return Youtube
    case 'tumblr':
      return Tumblr
    case 'skype':
      return Skype
    case 'pinterest':
      return Pinterest
    case 'zoom':
      return Zoom
    case 'behance':
      return Behance
    case 'reddit':
      return Reddit
    case 'messenger':
      return Messenger
    case 'snapchat':
      return Snapchat
    case 'google-calendar':
      return GoogleCalendar
    case 'google-analytics':
      return GoogleAnalytics
    case 'facebook-pixel':
      return FacebookPixel
    case 'dribbble':
      return Dribbble
    case 'soundcloud':
      return SoundCloud
    case 'telegram':
      return Telegram
    case 'google':
      return Google
    case 'tiktok':
      return Tiktok
    case 'gmail':
      return Gmail
    case 'spotify':
      return Spotify
    case 'patreon':
      return Patreon
    case 'trustpilot':
      return Trustpilot
    case 'apple':
      return Apple
  }
}

const computeSize = (size?: number | SocialIconSize): number => {
  if (size === 'big') return 64
  else if (size === 'medium') return 48
  else if (size === 'small') return 32
  if (typeof size === 'number') return size
  else return 48
}

interface SocialIconProps {
  onClick?: () => void
  network: SocialNetwork
  color?: string
  size?: SocialIconSize | number
  shape?: number | Shapes
  styles?: CSSProperties
  simpleIcon?: boolean
}

const SocialIcon: FC<SocialIconProps> = ({ network, size, shape, color, onClick, styles, simpleIcon }) => {
  const RenderedIcon: React.FC<IconProps> | undefined = getSocialNetworkIcon(network)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    !!onClick && onClick()
  }

  const getShape = (shape?: number | Shapes): number => {
    if (typeof shape === 'number') return shape
    else if (shape === 'square') return 0
    else if (shape === 'round') return 50
    else return 12
  }
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
        <RenderedIcon simpleIcon={simpleIcon} width={computeSize(size)} height={computeSize(size)} color={color} />
      )}
    </div>
  )
}

export default SocialIcon
