import React from 'react';
import '../zwa9.css';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import {useTranslation} from 'react-i18next';

export default function Feedback() {
  const phoneNumber = "+1 (234) 567-8910";
  const email = "pass@m5complex.com";
  const {t} = useTranslation();

  return (
    <>
      <div className="google-maps-container">
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11206.169066266018!2d-75.6835728!3d45.3984036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05c1c34168f3%3A0x4a69b90dfe9b6eb2!2sTD%20Place!5e0!3m2!1sen!2sca!4v1689115656201!5m2!1sen!2sca"
            width={770}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="text-container">
  <div className="contact-info">
    <span className="info-label">{t('phone')}</span>
    <a href="tel:{phoneNumber}" className="button">{phoneNumber}</a>
  </div>
  <br></br>
  <div className="contact-info">
    <span className="info-label">{t('email')}</span>
    <a href="mailto:{pass@m5complex.com}" className="button">{email}</a>
  </div>
</div>


      </div>

      <div className="feedback-container">
        <div className="forms">
          <h1>{t('feedback')}</h1>
          <MDBInput className="text-white" label={t('enterYourEmail')} id="typeEmail" type="email" />
          <MDBTextArea label="Message" id="textAreaExample" rows={4} />
          <button className="button-submit" onClick={() => alert("Thanks for your feedback! We will contact you regarding this and let you know if we decide to implement it.")}>
          {t('submit')}
</button>

        </div>
      </div>
    </>
  );
}
