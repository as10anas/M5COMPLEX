import React from 'react';
import { useTranslation } from 'react-i18next';
import WhyusSec from './WhyusSec';

function Whyus() {
  const { t } = useTranslation();

  return (
    <div className="col">
      <p className="fs-3 fw-bold">{t('whyUs')}</p>
      <WhyusSec whyustext={t('avoidLineups')} />
      <WhyusSec whyustext={t('guaranteedSeating')} />
      <WhyusSec whyustext={t('customerSupport1')} />
    </div>
  );
}

export default Whyus;
