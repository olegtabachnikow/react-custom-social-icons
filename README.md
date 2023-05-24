<h1 align="center">Welcome to react-custom-social-icons 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-custom-social-icons" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-custom-social-icons.svg">
  </a>
  <a href="https://github.com/olegtabachnikow/react-custom-social-icons#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/olegtabachnikow/react-custom-social-icons/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/olegtabachnikow/react-custom-social-icons/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/olegtabachnikow/react-custom-social-icons" />
  </a>
</p>

> The Social Network Icons component is a versatile and customizable React component that allows you to easily display social network icons in your application. It provides support for rendering icons in different sizes, shapes, and colors, making it flexible to fit various design requirements.

## Available Social Icons

Facebook,Apple, Behance, Discord, Dribble, Facebook Pixel, Gmail, Google Calendar, Google Maps, Google Meet, Google Analytics, Google, Instagram, LinkedIn, Messenger, Patreon, Pinterest, Reddit, Skype, Snapchat, Soundcloud, Spotify, Telegram, TikTok, Tinder, Trustpilot, Tumblr, Twitch, Twitter, Vimeo, WhatsApp, Vkontakte, Youtube, Zoom

## Install

```sh
npm i react-custom-social-icons
```

## Usage

```
import SocialIcon from 'react-custom-social-icons'

<SocialIcon network="facebook" />
```

## Available props

**styles** (object): An object containing CSS properties to apply custom styles to the icon.

**size** (number|string): The size of the icon specified as a number in pixels or as one of the string values: "big" (64px), "medium" (48px), or "small" (32px).

**shape** (number|string): The shape of the icon specified as either a number representing the border radius in pixels (default: 12) or as one of the string values: "square" (0), "rounded" (12), or "round" (50).

**color** (string): The color of the icon's fill property. If not set, the icon will have default colors.

**onClick** (function): A function that will be invoked when the icon is clicked.

**network** (string, required): Specifies which social network icon to render. Possible options:
'zoom'| 'discord' | 'facebook' | 'twitter' | 'instagram' | 'whatsapp' | 'vk' | 'linkedin' | 'vimeo' | 'youtube' | 'tumblr' | 'skype' | 'pinterest' | 'behance' | 'dribbble' | 'google-analytics' | 'facebook-pixel' | 'reddit' | 'messenger' | 'snapchat' | 'apple' | 'telegram' | 'google' | 'tiktok' | 'spotify' | 'trustpilot' | 'twitch' | 'google-meet' | 'google-maps' | 'gmail' | 'soundcloud' | 'patreon' | 'tinder' | 'google-calendar';

## Author

👤 **Oleg Tabachnikow**

- Website: https://www.facebook.com/eskel4ik
- Github: [@olegtabachnikow](https://github.com/olegtabachnikow)
- LinkedIn: [@olegtabachnikow](https://linkedin.com/in/olegtabachnikow)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Oleg Tabachnikow](https://github.com/olegtabachnikow).<br />
This project is [MIT](https://github.com/olegtabachnikow/react-custom-social-icons/blob/master/LICENSE) licensed.
