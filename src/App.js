import React, { useState } from 'react';
import Method from './Components/PaymentMethod/Method';
import Card from './Components/ServiceSec/Card';
import {Route, Routes} from "react-router-dom";
import CardDetails from './Components/PaymentDetail/CardDetails';
import Greetings from './Components/Greeting/Greetings';
import Navbar from './Components/Navfooter/Navbar';
import Footer from './Components/Navfooter/Footer';
import './zwa9.css';
import Carousel from './Components/Carousel';
// import { MDBInput } from 'mdb-react-ui-kit';
// import { MDBTextArea } from 'mdb-react-ui-kit';
import BMachines from './Components/MDBAccordion';
import "./Components/MDBAccordion";
import Feedback from './Components/Feedback';
import Faq from './Components/Faq';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './i18n';
import {Suspense} from 'react';
import LocaleContext from './LocaleContext';

function Loading() {
  return (
    <>Loading...</>
  )
}

function App() {

const [locale, setLocale] = useState(i18n.language);
i18n.on('languageChanged', (lng)=> setLocale(i18n.language));
const handleChange = (event)=>{
  i18n.changeLanguage(event.target.value); //fr or en
}

  return (
    <>

<div></div>
<LocaleContext.Provider value={{locale, setLocale}}>
<Suspense fallback={<Loading />}>
  {/* <div>
    <label>⬜ Traduction ⬜ </label>
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  </div> */}
    <Navbar></Navbar>


      <div className='container'>
        <Routes>
            <Route path="/" element={[<Carousel />, <Card/>,<BMachines/> ]}/>          
            <Route path="method" element={<Method />} />
            <Route path="detail" element={<CardDetails />} />
            <Route path="greeting" element={<Greetings/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/feedback" element={<Feedback/>} />
        </Routes>
      </div>   

      <div></div>
    <Footer></Footer>

    </Suspense>
    </LocaleContext.Provider>
    </>   
  );
}

export default App;
