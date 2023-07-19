import React from 'react';
import CardSelection from './CardSelection';
import Whyus from './Whyus';
import Headings from '../DefaultComp/Headings';
import { useTranslation } from "react-i18next";

function Method() {
  const { t } = useTranslation();
  return (
    <>
       <Headings heading={t('methodpayment')}/>
       <div className="row row-cols-1 row-cols-md-2">
          <CardSelection />  
          <Whyus />
       </div>
      </>
    
  )
}

export default Method