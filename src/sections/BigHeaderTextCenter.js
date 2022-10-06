import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';


export default class BigHeaderTextCenter extends React.Component{
  
  render(){
    return (
      <section className="BigHeaderTextCenter" style={{backgroundImage:`url(${this.props.background})`}}>
        <Container>
          <Row>
            <Col lg={12}>
              {/*<h1>Arrival</h1>
              <p>
              On arrival you will step down into the welcoming garden and seating area, which is a great place to meet your hostwho will welcome you to the property and show you around.
              </p>
              <p>
              The villa’s modern layout is well thought out, offering privacy and space for relaxation, both in the exteriorand interior. Consequently the use of shared practical space around the villa will give you a sense of privacy and allowyou to roam freely and relax where you please.
              </p>*/
              }
              <ReactMarkdown>{ this.props.html }</ReactMarkdown>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

}