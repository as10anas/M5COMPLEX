import React from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            M5 COMPLEX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {t('home')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#buy">
                  {t('buy')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#news">
                  {t('news')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">
                  {t('faq')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/feedback">
                  {t('contactUs')}
                </a>
              </li>
            </ul>
            <div>
              <label>{t('translation')} </label>
              <select value={i18n.language} onChange={handleChange}>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
