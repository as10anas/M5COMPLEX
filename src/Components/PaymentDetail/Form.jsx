import React from 'react';
import Button from '../DefaultComp/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Form() {
  const { t } = useTranslation();

  return (
    <div className="col">
      <div className="ps-4 pe-4">
        <div className="mbfa-rotate-270">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t('emailAddress')}
          </label>
          <input className="form-control form-control-lg border-dark rounded-0" type="text" />
        </div>
        <div className="mbfa-rotate-270">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t('nameOnCard')}
          </label>
          <input className="form-control form-control-lg border-dark rounded-0" type="text" />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t('cardNumber')}
          </label>
          <input className="form-control form-control-lg border-dark rounded-0" type="text" />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t('cvv')}
          </label>
          <input className="form-control form-control-lg border-dark rounded-0" type="text" />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t('expirationDate')}
          </label>
          <input className="form-control form-control-lg border-dark rounded-0" type="text" />
        </div>

        <Link to="/greeting">
          <Button btn={t('completeCheckout')} />
        </Link>

        <p>{t('termsOfService')}</p>
      </div>
    </div>
  );
}

export default Form;
