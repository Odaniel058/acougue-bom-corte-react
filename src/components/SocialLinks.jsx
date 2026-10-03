import { whatsappUrl, instagramUrl } from '../data/site';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        className="social-link"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp — abrir conversa em nova aba"
      >
        <img src="/images/icons/whatsapp.svg" width="20" height="20" alt="" aria-hidden="true" />{' '}
        WhatsApp
      </a>
      <a
        className="social-link"
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir Instagram em nova aba"
      >
        <img src="/images/icons/instagram.svg" width="20" height="20" alt="" aria-hidden="true" />{' '}
        Instagram
      </a>
    </div>
  );
}
