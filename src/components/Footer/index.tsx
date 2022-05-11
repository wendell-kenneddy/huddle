import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SocialLinkWrapper } from './SocialLinkWrapper';

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center md:justify-end gap-4 mt-10">
      <SocialLinkWrapper>
        <FaFacebookF />
      </SocialLinkWrapper>

      <SocialLinkWrapper>
        <FaTwitter />
      </SocialLinkWrapper>

      <SocialLinkWrapper>
        <FaInstagram />
      </SocialLinkWrapper>
    </footer>
  );
}
