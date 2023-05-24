import { ChangeEvent, FC, useState } from 'react';
import { SocialIcon, SocialNetwork } from './SocialIcon';

const options: string[] = [
  'zoom',
  'discord',
  'facebook',
  'twitter',
  'instagram',
  'whatsapp',
  'vk',
  'linkedin',
  'vimeo',
  'youtube',
  'tumblr',
  'skype',
  'pinterest',
  'behance',
  'dribbble',
  'google-analytics',
  'facebook-pixel',
  'reddit',
  'messenger',
  'snapchat',
  'apple',
  'telegram',
  'google',
  'tiktok',
  'spotify',
  'trustpilot',
  'twitch',
  'google-meet',
  'google-maps',
  'gmail',
  'soundcloud',
  'patreon',
  'tinder',
  'google-calendar',
];

const App: FC = () => {
  const [network, setNetwork] = useState<SocialNetwork>('facebook');
  const handleNetworkChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedNetwork: SocialNetwork = event.target.value as SocialNetwork;
    setNetwork(selectedNetwork);
  };
  return (
    <div>
      <SocialIcon network={network} size={80} shape='round' />
      <select onChange={handleNetworkChange}>
        {options.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
