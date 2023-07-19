import React from 'react';
import CardElement from './CardElement';
import HeadCenter from '../DefaultComp/HeadCenter'
import { useTranslation } from 'react-i18next';

function Card() {
  const { t } = useTranslation();
    return (
    <>

<main>
    <div id='buy' ></div>
            <HeadCenter centerheading={t('seasonPasses')}/>
            <div  className="row row-cols-1 row-cols-md-3 mb-3 text-center">  
                <CardElement 
                    ServiceName={t('atleticoOttawa')}
                    ServiceFor={t('soccerField')}
                    Capacity={t('capacity24000')}
                    Price='320'
                    description={t('reservedSeatNorth')}
                    detail1={t('accessAll17')}
                    detail2={t('exclusiveMeet')}
                    detail3={t('opportunityParticipate')}
                    link='https://atleticoottawa.canpl.ca/schedule/2023/ATO/home'
                />
                <CardElement
                    ServiceName={t('blackJacks')}
                    ServiceFor={t('basketballCourt')}
                    Capacity={t('capacity9862')}
                    Price='320'
                    description={t('reservedSeatEast')}
                    detail1={t('accessAll26')}
                    detail2={t('priorityPlayoff')}
                    detail3={t('accessPreGame')}
                    link='https://www.cebl.ca/schedule'
                />
                <CardElement
                    ServiceName={t('ottawa67s')}
                    ServiceFor={t('hockeyArena')}
                    Capacity={t('capacity11000')}
                    Price='320'
                    description={t('reservedSeatSouth')}
                    detail1={t('accessAll30')}
                    detail2={t('discountedMerchandise')}
                    detail3={t('bestView')}
                    link='https://ottawa67s.com/67s-schedule'
                />
            </div>
        </main>
        
    </>
  );
}

export default Card;
