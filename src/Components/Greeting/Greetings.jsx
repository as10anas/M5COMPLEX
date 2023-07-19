import React from 'react';
import Button from '../DefaultComp/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Greetings = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-5 pb-5 mt-0 align-items-center d-flex">
      <div className="container">
        <div className="pt-5 row justify-content-center align-items-center d-flex text-center h-100">
          <div className="col-12 col-md-8 h-50">
            <h1 className="display-2 mb-2 mt-5 mb-4"><strong>{t('thankYou')}</strong></h1>
            <p className="lead">{t('nextPurchase')}<br />{t('enjoyGames')}</p>
            <Link to="/"><Button btn={t('continueShopping')} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greetings;
