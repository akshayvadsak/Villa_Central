import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';


import bedroom_bathroom from '../images/bedroom_bathroom-peyia29b7pfc0zzi0ea2dskieffunnwyuoz767oox4.jpg';
import lounge from '../images/lounge.jpg';

export default class DescriptionForVilla extends React.Component{
  render(){
    return (
      <section className="DescriptionForVilla">
        <Container>
          <Row>
            <Col lg={12}>
              <img className="DescriptionForVilla_bigPhoto" src={bedroom_bathroom} alt="Description Villa" />
              <div className="DescriptionForVilla_bottom">
                <div style={{backgroundImage:`url(${lounge})`}}>
                  <img src={lounge} alt="Description Villa" />
                </div>
                <div>
                  {
                    /*
                  <p>
                  Just outside the bustle of the summer tourist crowds lies Villa Central. The Villa has everything you need to relax in and around Split for a few days or  It has all the convenience and facilities as your home, pool and BBQ area, all right next door to the old town of Split. It makes the perfect place to base yourself and explore.
                  </p>
                    */
                  }
                  <ReactMarkdown>
                  { this.props.content }
                  </ReactMarkdown>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}