import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';


import Front_Gate2 from '../images/Front_Gate2.jpg';

export default class PhotoBottomContent extends React.Component{

  render(){
    return (
      <section className="PhotoBottomContent">
        <Container>
          <Row>
            <Col lg={12}>
              <img src={Front_Gate2} alt="Arrival" />
              {/*<p>
              Outside on the lower ground level, there is a large wooden deck and pergola that nestles amongst the orange trees, offering comfort and shade from the sunny days. A BBQ and seating are also provided in this area, allowing guests to dine in the alfresco setting.
              </p>*/}
              <ReactMarkdown>
              {this.props.html}
              </ReactMarkdown>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

}