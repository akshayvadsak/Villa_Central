import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {
  /*BrowserRouter as Router,
  Routes,
  Route,*/
	NavLink,
  //Link
} from 'react-router-dom';

export default class BookNow extends React.Component{
  render(){
    return (
      <section className="BookNow">
        <Container>
          <Row>
            <Col>
              <div className="BookNowContent">
                <p>DON’T HESITATE TO CONTACT US</p>
                <h2>Bookings Coming Soon</h2>
                <a className="BookNowCallUseLink" href="tel:+385 (0)21 317 902">Call Us +385 (0)21 317 902</a>
                <NavLink className="btn btn-info btn_info_big_header" to="/book-now">Book now</NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}