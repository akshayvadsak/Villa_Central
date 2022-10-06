import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';
// Import Swiper React components
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  /*BrowserRouter as Router,
  Routes,
  Route,*/
	NavLink,
  //Link
} from 'react-router-dom';


import big_slider_house from '../images/big_slider_house.jpg';



export default class BigHeader extends React.Component{

  constructor(props) {
    super(props);
    /*
    Original html:
    this.slides_data = [
      <div>
        <h2><strong>Where lasting</strong> memories are made.</h2>
        <p>Villa Luxus is a stone villa featuring two self-contained apartments with a private pool, garden and balcony areas for residents to enjoy. Each apartment features two bedrooms which comfortably accommodate four guests. Whilst the ground floor is yet to be completed, it will feature a VIP residence, with works to commence over the winter before being completed by 2022.</p>
        <NavLink className="btn btn-info btn_info_big_header" to="/book-now">Book now</NavLink>
      </div>,
      <div>
        <h2><strong>Urban villa</strong> luxury apartments & pool</h2>
        <p>
        Villa Luxus is a stone villa featuring two self-contained apartments with a private pool, garden and balcony areas for residents to enjoy. Each apartment features two bedrooms which comfortably accommodate four guests. Whilst the ground floor is yet to be completed, it will feature a VIP residence, with works to commence over the winter before being completed by 2022.
        </p>
        <NavLink className="btn btn-info btn_info_big_header" to="/book-now">Book now</NavLink>
      </div>
    ];
    Don't delete it!!!
    */
    /*this.slides_data = [];
    if(this.props.slides_data!==undefined){
      this.slides_data = this.props.slides_data;
    }
    console.log(this.props, 'this.slides_data:', this.slides_data);*/
  }

  renderSlides(){
    //const slides = this.slides_data;
    const slides = this.props.slides_data;
    if(slides===undefined)return [];
    if (slides.length > 0) {      
      return slides.map((slide_content, index) => (
        <SwiperSlide key={index}>
          <ReactMarkdown className="swiper_content">
            {slide_content.content}
          </ReactMarkdown>
        </SwiperSlide>
      ));
    }
    else return [];
  }

  render (){
    const slides = this.renderSlides();
    return (
      <section className="big_header" style={{backgroundImage:`url(${big_slider_house})`}}>
        <Container>
          <Row>
            <Col lg={12}>
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                //onSlideChange={() => console.log('slide change')}
                onSwiper={
                  //(swiper) => console.log(swiper)
                  (swiper)=>{}
                }
              >
                {slides}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}