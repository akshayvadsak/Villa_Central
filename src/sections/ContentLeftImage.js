import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';
import {
  /*BrowserRouter as Router,
  Routes,
  Route,*/
	NavLink,
  //Link
} from 'react-router-dom';

import Split_Map_Drawing from '../images/map_split.jpg';


export default class ContentLeftImage extends React.Component{
  constructor(props){
    super(props);
  }



  render (){
    return (
      <section className="ContentImageContent">
        <Container>
          <Row>
            <Col md={5}>
              <img src={Split_Map_Drawing} alt="Split Map" className="ContentImageContent_image" />
            </Col>
            <Col md={7} className="ContentImageContent_content">
              {
                /*<p>OVERVIEW</p>
                <h2>Welcome To Split</h2>
                <p>
                  Villa Central is situated on a quiet one way street in the highly regarded residential area of Manuš, which backs on to the Old Town of Split. Consequently, the old streets and Riva are only a 5 minute walk away, which makes it perfect for extended stays of a week or more in Split.
                </p>
                <p>
                  The city of Split is a beautiful town and is a mix of old and new. The Old town features cobblestone streets and is surrounded by ancient walls and monuments. Step a little bit further and you will find the Riva (waterfront), beaches, parks and access to the islands via ferry. 
                </p>*/
              }
              <ReactMarkdown>
              {
                this.props.content
              }
              </ReactMarkdown>
              <NavLink className="btn btn-info btn_info_big_header btn_info_contentImageContent" to="/book-now">Book now</NavLink>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}