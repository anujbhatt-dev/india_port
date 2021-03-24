import React, {Component} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import greenCall from "../../../assets/images/greenCall.svg";
import vBar from "../../../assets/images/vBar.svg";
import aboutMain from "../../../assets/images/aboutMain.svg";
import logs from "../../../assets/images/logs.svg";
// import emailjs from 'emailjs-com';

  class Contact extends Component{

    state={
      name:"",
      email:"",
      phone:"",
      preference:"select",
      submitted:1,
    }
    //
    // onChangeHandler=(e)=>{
    //   e.preventDefault();
    //   this.setState({
    //     [e.target.name]:e.target.value
    //   })
    // }
    //
    // onSubmitHandler=(e)=>{
    //
    //   e.preventDefault();
    //    //console.log(this.state);
    //   this.setState({
    //     submitted:4,
    //   });
    //
    //
    //   let template="template_ep26v59";
    //
    //
    //   emailjs.sendForm('service_9wrddem', template, e.target, 'user_3C6n5XsLh20WgqpTa3412')
    //   .then((result) => {
    //      this.setState({
    //         name:"",
    //         email:"",
    //         phone:"",
    //         preference:"select",
    //         submitted:2,
    //       });
    //      setTimeout(()=>{this.setState({submitted:1})},5000);
    //   }, (error) => {
    //      this.setState({
    //          submitted:3,
    //       });
    //      setTimeout(()=>{this.setState({submitted:1})},2000);
    //   });
    //
    //
    //  }

     componentDidMount=()=>{

       window.scrollTo({top:0,behavior:"smooth"});
       Aos.init({
          duration: 1500,
          delay: 100,
        });
     }

    render(){

      return (
           <div data-aos="zoom-out" className="contact">
              <h1 className="head head--center">Reach us</h1>

              <div className="contact__1">
                  <form className="contact__1_form" onSubmit={this.onSubmitHandler}>
                      <input required name="name" value={this.state.name} onChange={this.onChangeHandler} placeholder="name" type="text"/>
                      <input required name="phone" value={this.state.phone} onChange={this.onChangeHandler} placeholder="phone" type="text"/>
                      <input required name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="email" type="text"/>
                      {this.state.submitted===1?
                      <input className="btn__buy" value="SUBMIT" type="submit"/>
                      :this.state.submitted===2?
                      <input className="btn__buy" style={{backgroundImage:"linear-gradient(90deg, rgba(75,204,51,1) 46%, rgba(22,217,54,1) 100%)"}} type="submit" disabled value="We'll connect with you soon.." />
                      :this.state.submitted===3?
                      <input className="btn__buy" style={{backgroundImage:"linear-gradient(90deg, rgba(204,51,51,1) 46%, rgba(168,13,13,1) 100%)"}} type="submit" disabled value="OOPS! Something went wrong.a1" />
                      :
                      <input className="btn__buy" type="submit" disabled value="..." />
                      }
                  </form>

                  <div className="contact__1_text">
                      <div className="contact__1_text-big"><span>Talk to our Experts</span></div>
                      <div className="contact__1_text-small">We need a few details to reach you.<br/><span>or</span><br/>Simply call us</div>
                      <a href="tel://+918517885555" className="contact__1_text-call"><img className="contact__1_text-call--img1" src={greenCall} alt=""/><img src={vBar} alt=""/>+91  8517885555</a>
                  </div>
              </div>
           </div>
      )
    }
  }


 export default Contact;
