import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

import measuring_tape from '../images/measuring-tape@2x.png';
import bedroom from '../images/bedroom-2@2x.png';
import parking from '../images/parking@2x.png';
import home from '../images/home@2x.png';
import appreciation from '../images/appreciation@2x.png';

export default class X5BlueBlocks extends React.Component{

  constructor(props){
    super(props);


    this.boxes_data = [
      {
        image:measuring_tape,
        number:'3',
        title:'APARTMENTS'
      },
      {
        image:bedroom,
        number:'02',
        title:'BEDROOMS'
      },
      {
        image:parking,
        number:'03',
        title:'CAR PARKINGS'
      },
      {
        image:home,
        number:'2021',
        title:'BUILT YEAR'
      },
      {
        image:appreciation,
        number:'-',
        title:'FIBRE INTERNET'
      }
    ];
  }


  renderBoxes(){
    if(this.props.items===undefined)return [];
    return this.props.items.map((boxe_data, index)=>(
      <li key={index}>
        <img src={this.boxes_data[index].image} alt={'Blue Box - '+boxe_data.title} />
        <h4>{boxe_data.number}</h4>
        <p>{boxe_data.title}</p>
      </li>
    ));
    /*return this.boxes_data.map((boxe_data, index)=>(
      <li key={index}>
        <img src={boxe_data.image} alt={'Blue Box - '+boxe_data.title} />
        <h4>{boxe_data.number}</h4>
        <p>{boxe_data.title}</p>
      </li>
    ));*/
  }


  render(){
    

    return (
      <section className="X5BlueBlocks">
        <Container>
          <Row>
            <Col lg={12}>
              <ul>
              {this.renderBoxes()}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

}