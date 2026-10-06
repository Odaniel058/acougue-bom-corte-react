import SocialLinks from './SocialLinks';
import { address, navigation } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-md-4">
            <a className="footer-brand" href="#inicio">
              Açougue Bom Corte
            </a>
            <SocialLinks />
          </div>
          <nav className="col-md-3" aria-label="Navegação do rodapé">
            <h2 className="footer-heading">Navegação</h2>
            <ul className="footer-navigation">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={'#' + item.id}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-md-4">
            <h2 className="footer-heading">Na Tijuca</h2>
            <address className="footer-address">{address}</address>
            <a className="text-link" href="#contato">
              Horários e atendimento
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Açougue Bom Corte.</small>
        </div>
      </div>
    </footer>
  );
}
