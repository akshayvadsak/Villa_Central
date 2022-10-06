import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactMarkdown from 'react-markdown';

import client1 from '../images/client1.png';

export default class Testimonials extends React.Component{

  constructor(props){
    super(props);

    this.testimonils_data = [
      {
        p:'The villa has been lovingly renovated to blend contemporary and traditional elements. The space is comfortable and practical, and provides the perfect location to relax and unwind as you take advantage of the touches of luxury and comfort added throughout the property.',
        h4:'Philip Cook',
        h5:'Tokyo, Japan'
      },
      {
        p:'The villa has been lovingly renovated to blend contemporary and traditional elements. The space is comfortable and practical, and provides the perfect location to relax and unwind as you take advantage of the touches of luxury and comfort added throughout the property.',
        h4:'Philip Cook 2',
        h5:'Tokyo, Japan'
      },
      {
        p:'The villa has been lovingly renovated to blend contemporary and traditional elements. The space is comfortable and practical, and provides the perfect location to relax and unwind as you take advantage of the touches of luxury and comfort added throughout the property.',
        h4:'Philip Cook 3',
        h5:'Tokyo, Japan'
      }
    ];
  }

  renderSlider(){
    if(this.props.testimonials===undefined || this.props.testimonials==='')return [];
    return this.props.testimonials.map((t_data, index)=>(
      <SwiperSlide key={index}>
        <div className="TestimonialsItem">
          <ReactMarkdown>
          {t_data.content}
          </ReactMarkdown>
        </div>
      </SwiperSlide>
    ));
    /*return this.testimonils_data.map((t_data, index)=>(
      <SwiperSlide key={index}>
        <div className="TestimonialsItem">
          <p>
          {t_data.p}
          </p>
          <h4>
          {t_data.h4}
          </h4>
          <h5>
          {t_data.h5}
          </h5>
        </div>
      </SwiperSlide>
    ));*/
  }

  render(){
    return (
      <section className="Testimonials">
        <Container>
          <Row>
            <Col lg={12}>
              {/*<h2>See What People Are Saying About <strong>LuxusVilla</strong></h2>*/}
              <ReactMarkdown>
              {this.props.content!==undefined && this.props.content.top_title!==undefined?this.props.content.top_title:''}
              </ReactMarkdown>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <img className="TestimonialsPhoto" src={client1} alt={this.props.content!==undefined && this.props.content.top_title!==undefined?this.props.content.top_title:''} />
            </Col>
            <Col md={7}>
              {/*<p className="TestimonialsMainLabel">
                Testimonials
              </p>
              <h3>
              That's What Our Super Client Says
              </h3>*/}
              <ReactMarkdown>
              {this.props.content!==undefined && this.props.content.right_content!==undefined?this.props.content.right_content:''}
              </ReactMarkdown>
              <div className="TestimonialsSwiper">
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
                  {this.renderSlider()}
                </Swiper>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}