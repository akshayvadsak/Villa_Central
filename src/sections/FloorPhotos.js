import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';

import floor1 from '../images/floor1.png';
import floor2 from '../images/floor2.png';
import floor3 from '../images/floor4-1.png';
import floor4 from '../images/floor3.png';

export default class FloorPhotos extends React.Component{

  constructor(props){
    super(props);

    //this.photos = [floor1, floor2, floor3, floor4];
  }

  renderThePhotos(){
    this.photos = this.props.photos;
    return this.photos.map((photo, index)=>(
      <div className="FloorPhoto" key={index} style={{backgroundImage:`url(${photo})`}}>
        <img src={photo} alt={this.props.title+' - Photo '+index} />
      </div>
    ));
  }

  render(){
    return(<section className="FloorPhotos">
      <Container>
        <Row>
          <Col lg={12}>
            <h2>{this.props.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="FloorPhotos_holder">
            { this.renderThePhotos() }
            </div>
          </Col>
        </Row>
      </Container>
    </section>);
  }
}