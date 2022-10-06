//Import libraries:
import React, {Component, useState, useEffect } from "react";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';


//Import components:
import Header from './Header';
import Footer from './Footer';
import BigHeader from './sections/BigHeader';
import ContentLeftImage from './sections/ContentLeftImage';
import X5BlueBlocks from './sections/X5BlueBlocks';
import DescriptionForVilla from './sections/DescriptionForVilla';
import LeftWhiteList from './sections/LeftWhiteList';
import Testimonials from './sections/Testimonials';
import BookNow from './sections/BookNow';
import BigHeaderTextCenter from './sections/BigHeaderTextCenter';
import PhotoBottomContent from './sections/PhotoBottomContent';
import PanelOnSide from './sections/PanelOnSide';
import LightBlueBanner from './sections/LightBlueBanner';
import FloorContent from './sections/FloorContent';
import FloorPhotos from './sections/FloorPhotos';
import BookNowForm from './sections/BookNowForm';

//Import sources:
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




import pool from './images/Pool.jpg';
import front_villa from './images/front_villa.jpg';
import villa_green from './images/Group-52551.png';
import house_drone from './images/house_drone.jpg';
import bedroom_bathroom from './images/bedroom_bathroom.jpg';
import Loft_Lounge from './images/Loft_Lounge.jpg';
//
import floor1 from './images/floor1.png';
import floor2 from './images/floor2.png';
import floor3 from './images/floor4-1.png';
import floor4 from './images/floor3.png';





function App() {


  return (
    <Router>


      <Routes>
        <Route exact path='/' element={< PageHome />}></Route>
        <Route exact path='/arrivals' element={< PageArrivals />}></Route>
        <Route exact path='/the-apartments' element={< PageTheApartments />}></Route>
        <Route exact path='/book-now' element={< PageBookNow />}></Route>
        <Route exact path='/testing' element={< Testing />}></Route>
      </Routes>

      <ScrollTop></ScrollTop>

    </Router>
  );
}

export default App;


function PageHome(){

  const [data_homepage, setDataForHomePage] = useState({});
  useEffect(()=>{
    //if(data_homepage===undefined)
    axios.get('https://villacentralstrapicms.herokuapp.com/api/home?populate=*').then(response => {
      setDataForHomePage( response.data.data.attributes );
    });
  }, []);

  console.log('data_homepage before render :', data_homepage);

  return (
    <div>
      <Header></Header>
      <BigHeader slides_data={data_homepage.home_big_slider}></BigHeader>
      <ContentLeftImage content={data_homepage.welcome_to_split}></ContentLeftImage>
      <X5BlueBlocks items={data_homepage.blue_boxes}></X5BlueBlocks>
      <DescriptionForVilla content={data_homepage.description_for_villa}></DescriptionForVilla>
      <LeftWhiteList content={data_homepage.left_white_list}></LeftWhiteList>
      <Testimonials content={data_homepage.testimonials} testimonials={data_homepage.testimonials_items}></Testimonials>
      <BookNow></BookNow>
      <Footer></Footer>
    </div>
  );
}
function PageArrivals(){

  const BigHeaderTextCenter_html = (<div>
      <h1>Arrival</h1>
      <p>
      On arrival you will step down into the welcoming garden and seating area, which is a great place to meet your hostwho will welcome you to the property and show you around.
      </p>
      <p>
      The villa’s modern layout is well thought out, offering privacy and space for relaxation, both in the exteriorand interior. Consequently the use of shared practical space around the villa will give you a sense of privacy and allowyou to roam freely and relax where you please.
      </p>
    </div>);
    ///
    const PhotoBottomContent_html = (<div>
      <p>
                Outside on the lower ground level, there is a large wooden deck and pergola that nestles amongst the orange trees, offering comfort and shade from the sunny days. A BBQ and seating are also provided in this area, allowing guests to dine in the alfresco setting.
                </p>
      </div>);
    ///
    const PanelOnSide_html_1 = (<div>
      <p>
        Outside on the lower ground level, there is a large wooden deck and pergola that nestles amongst the orange trees, offering comfort and shade from the sunny days. A BBQ and seating are also provided in this area, allowing guests to dine in the alfresco setting.
        </p>
        <p>
        Welcoming you at the top of the stairs of the first floor is a small glass sunroom. This sits on the East side of the villa, so is well shaded, and features windows and a roof fan, making it a great space to relax and read, or catch up on the latest news online with a coffee.
        </p>
      </div>);
    const PanelOnSide_html_2 = (<div>
        <p>
        Gated off street parking is available for residents, with one spot reserved for each apartment. Electric charging is available (240v) for vehicles or bicycles. Locked storage is available for cycles or other equipment. 
        </p>
        <ul>
          <li>Secure access  24/7</li>
          <li>Parking</li>
          <li>240v Charging</li>
          <li>Storage</li>
          <li>Security cameras</li>
        </ul>
        <p>
        For general enquiries:
        </p>
        <a href="tel:+385 (0)21 317 902">+385 (0)21 317 902</a>
      </div>);

  const [data_arrivals, setDataForArrivalsPage] = useState({});
  useEffect(()=>{
    //if(data_homepage===undefined)
    axios.get('https://villacentralstrapicms.herokuapp.com/api/arrival?populate=*').then(response => {
      setDataForArrivalsPage( response.data.data.attributes );
    });
  }, []);


  return (
    <div>
      <Header></Header>

      <BigHeaderTextCenter html={data_arrivals.big_header!==undefined?data_arrivals.big_header.content:''} background={pool}></BigHeaderTextCenter>
      <PhotoBottomContent html={data_arrivals.photo_bottom_content!==undefined?data_arrivals.photo_bottom_content.content:''}></PhotoBottomContent>
      <PanelOnSide html={data_arrivals.panel_on_side_right!==undefined?data_arrivals.panel_on_side_right.content:''} background={house_drone}></PanelOnSide>
      <LightBlueBanner html={data_arrivals.light_blue_title}></LightBlueBanner>
      <PanelOnSide type="left_white" html={data_arrivals.panel_on_side_left !==undefined?data_arrivals.panel_on_side_left.content:''} background={front_villa}></PanelOnSide>
      <BookNow></BookNow>
      <Footer></Footer>
    </div>
  );
}
function PageTheApartments(){

  const BigHeaderTextCenter_html = (<div>
      <h1>The Apartments</h1>
      <p>
      The villa is perfectly suited to couples and groups of friends looking for somewhere to relax and enjoy the surrounding sites and attractions Split has to offer. There are a number of nearby beaches, monuments and parks to explore and the islands are an easy ferry ride from the old town of Split.
      </p>
    </div>);
  ///
  const PhotoBottomContent_html = (<div className="PhotoBottomContent_grid">
      <p>
        The bedrooms and lounge area in each apartment are complete with air-conditioning units, wi-fi and smart TV’s.
      </p>
      <p>
        Each apartment also features a separate WC and linen/laundry room, making it ideal for extended stays or to do some laundry if you have been out on a yacht or cruise beforehand.
      </p>
    </div>);
  ///
  const floorcontent1 = (<div><p>OVERVIEW</p>
    <h2>1st Floor Apartment</h2>
    <p>
    The first floor apartment features two private bedrooms each with a private ensuite , double beds and a fullyintegrated kitchen, perfect for self-catering. This apartment also has a private balcony and pergola with outsideseating for dining or relaxing.
    </p></div>);
  const floorcontent2 = (<div><p>OVERVIEW</p>
    <h2>Top Floor Apartment</h2>
    <p>
    The top floor apartment also features two bedrooms with private ensuites and nestles into the roof space, which has been extended from an old part of the villa. This area features a very high central ceiling, providing a luxurious and spacious feel. Large roof windows flood the bedrooms and lounge area with natural light, however block out curtains are also provided for your comfort. A fully integrated kitchen is also present on the top floor which is perfect for self-catering.
    </p></div>);

    

  const [data_aparatments, setDataForApartmentsPage] = useState({});
  useEffect(()=>{
    //if(data_homepage===undefined)
    axios.get('https://villacentralstrapicms.herokuapp.com/api/the-apartments-singular?populate=*').then(response => {
      setDataForApartmentsPage( response.data.data.attributes );
    });
  }, []);

  return (
    <div>
      <Header></Header>
      <BigHeaderTextCenter html={data_aparatments.big_header!==undefined?data_aparatments.big_header.content:''} background={front_villa}></BigHeaderTextCenter>
      <PhotoBottomContent html={data_aparatments.photo_bottom_content!==undefined?data_aparatments.photo_bottom_content.content:''}></PhotoBottomContent>
      <FloorContent background={bedroom_bathroom} html={data_aparatments.left_panel!==undefined?data_aparatments.left_panel.content:''}></FloorContent>
      <FloorPhotos photos={[floor1,floor2,floor3,floor4]} title={data_aparatments.gallery_floor_1!==undefined?data_aparatments.gallery_floor_1.title:''}></FloorPhotos>
      <FloorContent background={Loft_Lounge} html={data_aparatments.right_panel!==undefined?data_aparatments.right_panel.content:''} type="right"></FloorContent>
      <FloorPhotos photos={[floor1,floor2,floor3,floor4]} title={data_aparatments.gallery_top!==undefined?data_aparatments.gallery_top.title:''}></FloorPhotos>
      <BookNow></BookNow>
      <Footer></Footer>
    </div>
  );
}
function PageBookNow(){

  const BigHeaderTextCenter_html = (<div>
      <h1>Book Now</h1>
      <p>
      On arrival you will step down into the welcoming garden and seating area, which is a great place to meet your hostwho will welcome you to the property and show you around.
      </p>
    </div>);


  
  const [data_book, setDataForBookNowPage] = useState({});
  useEffect(()=>{
    //if(data_homepage===undefined)
    axios.get('https://villacentralstrapicms.herokuapp.com/api/book-now?populate=*').then(response => {
      setDataForBookNowPage( response.data.data.attributes );
    });
  }, []);
    

  return (
    <div>
      <Header></Header>
      <BigHeaderTextCenter html={data_book.big_header!==undefined?data_book.big_header.content:''} background={villa_green}></BigHeaderTextCenter>
      <BookNowForm></BookNowForm>
      <Footer></Footer>
    </div>
  );
}

function ScrollTop(){

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    //console.log('AAAAAAAAA');
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);



  const scroll_top = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  }

  return (
    <div className={'ScrollTop '+(visible?'ScrollTopVisible':'')} onClick={scroll_top}>
      <FontAwesomeIcon icon={solid('angle-up')} />
    </div>
  );
}

function Testing(){

  //const [Alldata, setAlldata] = useState({});
  const [data_testing, setData2] = useState({});

  useEffect(()=>{
      const { data } = axios.get('https://villacentralstrapicms.herokuapp.com/api/home?populate=*').then(response => {
      console.log(response);  
      //console.log(response.data.data[0].attributes);
      //data_testing = response.data.data[0].attributes;
      //console.log('data_testing:', data_testing);
      setData2(response.data.data.attributes);
    });
  }, []);

  console.log('data_testing:', data_testing);
  return (<div>
    Example HTML { data_testing.home_big_slider!==undefined?data_testing.home_big_slider[0].content:'no defined yet' }
    <ReactMarkdown>
    { data_testing.home_big_slider!==undefined?data_testing.home_big_slider[0].content:'no defined yet' }
    </ReactMarkdown>
    </div>);
}
