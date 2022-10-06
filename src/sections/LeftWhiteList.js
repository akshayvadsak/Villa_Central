import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';


import bed from '../images/bed.jpg';

export default class LeftWhiteList extends React.Component{

  render (){
    return (
      <section className="LeftWhiteList">
        <div className="LeftWhiteList_bg" style={{backgroundImage:`url(${bed})`}}>
          <img src={bed} alt="AMAZING APARTMENTS AMENITIES" />
        </div>
        <Container>
          <Row>
            <Col lg={12}>
              {
                /*
                <ul>
                  <li>Fully Self Contained</li>
                  <li>Ensuite Rooms</li>
                  <li>Secured Parking</li>
                  <li>High Speed Internet</li>
                  <li>Swimming Pool</li>
                  <li>24/7 Security System</li>
                  <li>Lounge Decking and BBQ</li>
                </ul>
                */
              }
              <ReactMarkdown>
              {
                this.props.content!=='' && this.props.content!==undefined && this.props.content.list_holder!==undefined?this.props.content.list_holder:''
              }
              </ReactMarkdown>
              <div className="LeftWhiteList_rightContent">
                {
                  /*
                  <p>AMAZING APARTMENTS AMENITIES</p>
                  <h3>A Place for you to call Home</h3>
                  */
                }
                <ReactMarkdown>{this.props.content!==undefined && this.props.content.right_content!==undefined?this.props.content.right_content:''}</ReactMarkdown>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

}