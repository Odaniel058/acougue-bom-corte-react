import { useState } from 'react';
import { navigation } from '../data/site';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
      document.getElementById('menu-button').focus();
    }
  }

  return (
    <header className="site-header">
      <nav
        className="navbar navbar-expand-md"
        data-bs-theme="dark"
        aria-label="Navegação principal"
        onKeyDown={handleKeyDown}
      >
        <div className="container">
          <a
            className="navbar-brand brand"
            href="#inicio"
            onClick={closeMenu}
            aria-label="Açougue Bom Corte — início"
          >
            <span className="brand-kicker">AÇOUGUE</span>
            <span className="brand-name">
              Bom Corte<span className="brand-dot">.</span>
            </span>
          </a>
          <button
            id="menu-button"
            className="navbar-toggler"
            type="button"
            aria-controls="menuPrincipal"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={'collapse navbar-collapse' + (menuOpen ? ' show' : '')}
            id="menuPrincipal"
          >
            <ul className="navbar-nav ms-auto">
              {navigation.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a className="nav-link" href={'#' + item.id} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
