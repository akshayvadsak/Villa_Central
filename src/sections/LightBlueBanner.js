import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';

export default class LightBlueBanner extends React.Component{
  render(){
    return (<section className="LightBlueBanner">
      <Container>
        <Row>
          <Col lg={12}>
            {/*<p>VILLA LUXUS</p>
            <h2>Security & Parking</h2>*/}
            <ReactMarkdown>
            {this.props.html}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </section>);
  }
}