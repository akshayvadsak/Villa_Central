import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';

import house_drone from '../images/house_drone.jpg';

export default class PanelOnSide extends React.Component{
  render(){
    return (<section className={'PanelOnSide '+(this.props.type=='left_white'?'PanelOnside_LeftWhite':'')} style={{backgroundImage:`url(${this.props.background})`}}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="PanelOnSide_panel">
              {/*<p>
              Outside on the lower ground level, there is a large wooden deck and pergola that nestles amongst the orange trees, offering comfort and shade from the sunny days. A BBQ and seating are also provided in this area, allowing guests to dine in the alfresco setting.
              </p>
              <p>
              Welcoming you at the top of the stairs of the first floor is a small glass sunroom. This sits on the East side of the villa, so is well shaded, and features windows and a roof fan, making it a great space to relax and read, or catch up on the latest news online with a coffee.
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