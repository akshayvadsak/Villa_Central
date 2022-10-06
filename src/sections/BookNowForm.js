import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com'

export default class BookNowForm extends React.Component{
  


  constructor(props){


    super(props);
    this.FormDetails = {
      book_name:{value:'', id:'book_name'},
      book_email:{value:'', id:'book_email'},
      book_message:{value:'', id:'book_message'},
    };
    this.state = {ErrorsMessages:undefined, BookNowForm_additionalClass:'', loading_text:''};

    

    console.log(emailjs);
  }


  SubmitTheForm = (event) => {

    event.preventDefault();
    
    //this.form = useRef();

    const form_data = {
      book_name:this.FormDetails.book_name.value,
      book_email:this.FormDetails.book_email.value,
      book_message:this.FormDetails.book_message.value,
    };


    



    //console.log(this, event.target);

    this._validateBookingForm();
    if(this.state.ErrorsMessages!==''){
      return;
    }

    //console.log('Form can be submited');

    //document.body.classList.add('ShowMenuOnMobile');

    this.setState({BookNowForm_additionalClass:'BookNowForm_sending', loading_text:' ...'});

    console.log('form_data:', form_data);
    emailjs.send(
      'service_s8gzel8',//service id
      'template_rdsusyg',//template id 
      form_data,
      'w-qgGBsTx34zU6Aaj'//user id
      )
      .then((result) => {
        console.log(result);
        /*setAlertContent({
          heading: "Thank you for contacting me.", 
          message: "I will respond to your message as soon as I can."
        })
        setShowAlert(true)*/

        console.log('after ok send email', this);
        this.setState({BookNowForm_additionalClass:'', loading_text:''});
        this.setState({BookNowForm_additionalClass:' BookNowMessageIsSendOK'});
      }, (error) => {
        console.log(error);
        /*setAlertContent({
          heading: "Something went wrong.", 
          message: error.text
        })
        setShowAlert(true)*/
        this.setState({BookNowForm_additionalClass:'', loading_text:''});
        this.setState({BookNowForm_additionalClass:' BookNowMessageIsSendError'});
      });

  }
  InputOnChange = (event) => {
    //console.log(event.target.value, event.target.id);
    /*if((event.target.id=='book_name' || event.target.id=='book_message') && event.target.value===''){

    }*/
    this.FormDetails[event.target.id] = {id:event.target.id, value:event.target.value};
    this._validateBookingForm();
  }
  _validateBookingForm = () => {
    var ErrorsMessages = '';
    if(this.FormDetails['book_name'].value==''){
      ErrorsMessages=(<p>Please add name</p>);
    }
    else if(/\S+@\S+\.\S+/.test(this.FormDetails['book_email'].value)==false){
      ErrorsMessages=(<p>Please add valid email address</p>);
    }
    else if(this.FormDetails['book_message'].value==''){
      ErrorsMessages=(<p>Please add message</p>);
    }
    this.setState({ErrorsMessages:ErrorsMessages});
  }
  



  render(){
    return(<section className={'BookNowForm '+(this.state.BookNowForm_additionalClass)}>
      <Container>
        <Row>
          <Col lg={12}>
            <Form ref={this.form}>

              <h2>Book Now</h2>

              <Form.Group className="mb-3" controlId="book_name">
                <Form.Label>Name<span>*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" onChange={this.InputOnChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="book_email">
                <Form.Label>Email<span>*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" onChange={this.InputOnChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="book_message">
                <Form.Label>Message<span>*</span></Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter a Formal Description" onChange={this.InputOnChange} />
              </Form.Group>

              <Button type="button" variant="info" size="lg" className="w-100" onClick={this.SubmitTheForm}>
                SUBMIT{this.state.loading_text}
              </Button>

              <hr />

              <div className="BookNowErrors">{
                this.state.ErrorsMessages
              }</div>

              <div className="BookNowThankYouMessage">
                <div>
                  <p>
                    Booking message is send.
                  </p>
                  <p>
                  Thank you for getting in touch! 
                  </p>
                  <p>
                  We appreciate you contacting us.
                  </p>
                </div>
              </div>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>);
  }

}