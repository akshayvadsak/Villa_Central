//libraries:
import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {
  /*BrowserRouter as Router,
  Routes,
  Route,*/
	NavLink,
  //Link
} from 'react-router-dom';


//sources:
import logo from './images/logo.png';



export default class Header extends React.Component{

  constructor(props){
    super(props);
    if(this.HamburgMenuClicked===undefined)
      this.HamburgMenuClicked = false;
    console.log('this.HamburgMenuClicked:', this.HamburgMenuClicked);


    setTimeout(function(){

      if(document.body.classList.contains("ShowMenuOnMobile")){
        document.body.classList.remove('ShowMenuOnMobile');
      }
    }, 1);
  }

  HamburgMenuOnClick = () => {
    //console.log(this);
    if(this.HamburgMenuClicked){
      document.body.classList.remove('ShowMenuOnMobile');
      this.HamburgMenuClicked = false;
    }
    else{
      document.body.classList.add('ShowMenuOnMobile');
      this.HamburgMenuClicked = true;
    }
    //console.log(this.HamburgMenuClicked);
  }
  HideMobileMenu = () => {
    /*This is not good, burger menu not animate
    this.HamburgMenuClicked = false;
    document.body.classList.remove('ShowMenuOnMobile');*/
  }


	render (){
		return (
			<header>
				<Container>
					<Row>
						<Col lg={12} className="header-holder">
							<NavLink to="/" className="HeaderLogoLink">
								<img src={logo} alt="Logo" />
							</NavLink>

							<div className="HeaderRightMenu">
								<ul className="header_contact_menu">
									<li>EMAIL US: <a href="mailto:info@villa-central.com">info@villa-central.com</a></li>
									<li>PH: <a href="tel:+385 21 317 902">+385 21 317 902</a></li>
									<li>VISIT US: <a href="#" target="_blank">Istarska ul. 32, 21000, Split, Croatia</a></li>
								</ul>
								<div className="header_navigation_menu_holder">
                  <ul className="header_navigation_menu">
                    <li>
                      <NavLink to="/arrivals" className={({ isActive }) => (isActive?'active':'')} onClick={this.HideMobileMenu}>
                        <span>Arrival</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/the-apartments" className={({ isActive }) => (isActive?'active':'')} onClick={this.HideMobileMenu}>
                        <span>The Apartments</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/book-now" className={({ isActive }) => (isActive?'active':'')} onClick={this.HideMobileMenu}>
                        <span>Book Now</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div type="button" className="hamburg" onClick={this.HamburgMenuOnClick}>
                  <div className="hamburg_line_1"></div>
                  <div className="hamburg_line_m m1"></div>
                  <div className="hamburg_line_m m2"></div>
                  <div className="hamburg_line_4"></div>
                </div>
							</div>

						</Col>
					</Row>
				</Container>
			</header>
		);
	}
}