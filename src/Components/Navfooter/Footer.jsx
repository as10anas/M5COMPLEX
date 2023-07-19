import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div id="footerr" className="footer-container">
        <div className="footer">
          <div className="footer-heading footer-1">
            <h2 style={{ color: 'rgb(255, 255, 255)' }}>{t('quickLinks')}</h2>
            <a style={{ fontSize: '120%' }} href="/#buy">{t('buySeasonPass')}</a>
            <a style={{ fontSize: '120%' }} href="/#news">{t('teamsNews')}</a>
            <a style={{ fontSize: '120%' }} href="faq">{t('faq')}</a>
            <a style={{ fontSize: '120%' }} href="feedback">{t('feedback1')}</a>
          </div>
          <div className="footer-heading footer-2">
            <h2 style={{ color: 'rgb(255, 255, 255)' }}>{t('customerSupport')}</h2>
            <a style={{ fontSize: '120%' }}>{t('ourNumber')}</a>
            <a style={{ fontSize: '120%' }} href={`tel:${t('phoneNumber')}`} className="email"> +1(234) 567-8910</a>
            <a style={{ fontSize: '120%' }}>{t('ourEmail')}</a>
            <a style={{ fontSize: '120%' }} href={`mailto:${t('email')}`} className="email">pass@m5complex.com</a>
          </div>
          <div className="footer-heading footer-3">
            <h2 style={{ color: '#ffffff' }}>{t('addressHours')}</h2>
            <p style={{ fontSize: '120%' }}>{t('address')}</p>
            <p style={{ fontSize: '120%' }}>{t('hours')}</p>
          </div>
        </div>
        <div className="copyright">
          <p>
            {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
