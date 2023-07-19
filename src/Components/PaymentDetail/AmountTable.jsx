import React from 'react';
import { useTranslation } from 'react-i18next';
import AmountDetails from './AmountDetails';

function AmountTable() {
  const { t } = useTranslation();

  return (
    <>
      <div className="col">
        <div className="border border-2 border-dark p-4">
          <AmountDetails ItemName={t('originalPrice')} Pri="$320" />
          <AmountDetails ItemName={t('discounts')} Dis="0%" Pri="$0" />
          <AmountDetails ItemName={t('tax')} Pri="$41.6" />
          <hr />
          <AmountDetails ItemName={t('total')} Pri="$361.6" />
        </div>
        <p className="fs-5 mt-4">
          {t('paymentPlatform')}<br />
          {t('peaceOfMind')}
        </p>
      </div>
    </>
  );
}

export default AmountTable;
