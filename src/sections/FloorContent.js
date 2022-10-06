import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';



import bedroom_bathroom from '../images/bedroom_bathroom.jpg';


export default class FloorContent extends React.Component{
  render(){
    return(<section className={'FloorContent '+(this.props.type=='right'?'FloorContent_right':'')} style={{backgroundImage:`url(${this.props.background})`}}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="FloorContentPanel">
              {/*<p>OVERVIEW</p>
              <h2>1st Floor Apartment</h2>
              <p>
              The first floor apartment features two private bedrooms each with a private ensuite , double beds and a fullyintegrated kitchen, perfect for self-catering. This apartment also has a private balcony and pergola with outsideseating for dining or relaxing.
              </p>*/}
              <ReactMarkdown>
              {this.props.html}
              </ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </section>);
  }
}