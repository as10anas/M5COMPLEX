import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import HeadCenter from './DefaultComp/HeadCenter'
import { useTranslation } from 'react-i18next';

export default function BMachines() {
  const { t } = useTranslation();
  return (
    <MDBAccordion id='news' className="accord" flush initialActive={1}>

<HeadCenter id='news' centerheading ={t('teamsNews')} />



      <MDBAccordionItem  collapseId={1} headerTitle={t('atleticoOttawaSoccer')}>
        <div className="okay1">
          <a href="https://atleticoottawa.canpl.ca/" target="_blank" ><img className="machines" border="0" src="https://cpl-uploads.s3.amazonaws.com/app/uploads/ottawa/ATO_Primary_Mark_keyline.png" alt="team logo" /></a>
          <h1 className="okay2 text-dark">
  <strong>{t('canada2022Champions')}</strong>
  <span className="small-text"> {t('clicklogo')}</span>
</h1>

        </div>
        <p><strong>Atletico Ottawa</strong> is a professional soccer team based in Ottawa, Canada. The team was founded in 2020 and competes in the Canadian Premier League (CPL), the top tier of professional soccer in Canada. Atletico Ottawa is affiliated with Spanish soccer club Atletico Madrid, which provides coaching and technical support.</p>
        <p>Despite being a relatively new team, Atletico Ottawa has already made significant strides in Canadian soccer. The club's inaugural season in 2020 was marked by enthusiasm from fans and promising performances on the field.</p>
        <p> In recent news, Atletico Ottawa has been actively strengthening its squad, <a href="https://atleticoottawa.canpl.ca/article/atletico-ottawa-signs-legendary-spanish-midfielder-alberto-zapater" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold', fontSize: '110%'  }}>signing legendary Spanish midfielder Alberto Zapater</a>. </p>
        <p>
  Fans eagerly anticipate the upcoming seasons, as Atletico Ottawa continues to strive for excellence in Canadian soccer. Check out their <a href="https://canpl.ca/standings/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold' }}>league standing</a> and <a href="https://atleticoottawa.canpl.ca/roster" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold', fontSize: '100%' }}>roster</a>.
</p>


      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Black Jacks Basketball'>
        <div className="okay1">
        <a href="https://www.theblackjacks.ca/" target="_blank" ><img className="machines" border="0" src="https://se-img.dcd-production.i.geniussports.com/78256a7e11f01940fdf2e920be615536S1.png" alt="team logo" /></a>
        <h1 className="okay2 text-dark"><strong>{t('leagueLeaders2023')} <br></br>{t('aa')}</strong> <span className="small-text"> {t('clicklogo')}</span></h1>
        </div>
        <p> <strong>The Black Jacks</strong> is a professional basketball team based in Ottawa, Canada. The team competes in the Canadian Elite Basketball League (CEBL), which was established in 2018 as a premier summer basketball league in Canada. The Black Jacks were one of the original teams when the league debuted in 2019.</p>
        <p>The Black Jacks excel with an exciting playstyle and passionate fan base, fostering basketball culture and community engagement in Ottawa.</p>
        <p>Recently, the team is making waves in the CEBL with strong performances, attracting talent, and actively engaging in community initiatives. They are establishing themselves as a force in Canadian basketball with a promising future. Check out their <a href="https://www.cebl.ca/standings" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold' }}>league standing</a> and <a href="https://www.theblackjacks.ca/2022-roster" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold' }}>roster</a>.</p>
    
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle="67's Ottawa Hockey">
        <div className="okay1">
        <a href="https://ottawa67s.com/" target="_blank" ><img className="machines" border="0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ottawa_67%27s_logo.svg/1200px-Ottawa_67%27s_logo.svg.png" alt="team logo"/></a>
        <h1 className="okay2 text-dark"><strong>{t('bestTeamOHL')}</strong> <span className="small-text"> {t('clicklogo')}</span></h1>
        </div>
        <p><br></br><strong>The Ottawa 67's</strong> is a major junior ice hockey team based in Ottawa, Canada. The team was founded in 1967 and has a rich history in the Ontario Hockey League (OHL). The name "67's" pays homage to Canada's centennial year, as the team was established during the country's 100th anniversary.</p>
        <p>The Ottawa 67's are a highly successful junior hockey team, winning championships and developing NHL-caliber players. Fans gather at TD Place Arena to passionately support the team.</p>
        <p>The Ottawa 67's are a top team in the OHL, consistently performing at a high level. They develop young talent, attract attention, and have a dedicated fan base supporting their pursuit of excellence on the ice. Check out their <a href="https://ottawa67s.com/standings/73/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold' }}>league standing</a> and <a href="https://ottawa67s.com/roster/5/73" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold' }}>roster</a>.</p>
       

      </MDBAccordionItem>
    </MDBAccordion>
  );
}