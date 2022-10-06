//libraries:
import React from "react";
import {
  Form,
  InputGroup,
  Button,
  Container, Row, Col
} from 'react-bootstrap';
import {
  /*BrowserRouter as Router,
  Routes,
  Route,*/
	NavLink,
  Link
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


//sources:
import logowhite from './images/logo_whte.png';
import footer_background from './images/footer_background.png';

export default class Footer extends React.Component{
  render (){
    return (
      <footer style={{backgroundImage:`url(${footer_background})`}}>
        <Container>
          <Row>
            <Col lg={12} className="FooterColumnsHolder">
              <div className="footer_column footer_column_1">
                <NavLink to="/" className="LogoLinkFoooter">
                  <img src={logowhite} alt="Logo Footer" />
                </NavLink>
                <p>
                Villa Central is a stone villa featuring two self-contained apartments with a private pool, garden, and balcony areas for residents to enjoy. Each apartment features two bedrooms that comfortably accommodate four guests.
                </p>
              </div>
              <div className="footer_column footer_column_2">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <NavLink to="/the-apartments" className={({ isActive }) => (isActive?'active':'')}>
                      Apartments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/arrivals#security" className={({ isActive }) => (isActive?'active':'')}>
                      Security & Parking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/book-now" className={({ isActive }) => (isActive?'active':'')}>
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <a href="mailto:info@villa-central.com">
                    WRITE US: info@villa-central.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+385 (0)21 317 902">
                    CALL US: +385 (0)21 317 902
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                    VISIT US: Istarska ul. 32, Split
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div className="footer_column footer_column_3">
                <h4>Subscriber to our Newsletter</h4>
                <form>
                  <InputGroup>
                    <Form.Control
                      placeholder="Enter Business Email"
                      aria-label="Enter Business Email"
                      aria-describedby="basic-addon2"
                      type="email"
                    />
                    <Button variant="info" id="button-addon2">
                      <FontAwesomeIcon icon={solid('paper-plane')} />
                    </Button>
                  </InputGroup>
                </form>
                <p>
                You may unsubscribe from our monthly newsletter at any time. Check out our Privacy Policy for more information on how we store and protect your data.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <hr className="footer_divider" />
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="FooterCopyrightSocial">
              <p className="FooterCopyrightText">© Villa Central All rights reserved.</p>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={brands('facebook')} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={brands('linkedin')} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={brands('twitter-square')} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={brands('youtube')} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}