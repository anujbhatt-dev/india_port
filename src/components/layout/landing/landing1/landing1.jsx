import React, {Component} from "react"
import ship from "../../../../assets/images/ship.svg"
import Aos from "aos"
import "aos/dist/aos.css"
import $ from 'jquery'

class Landing1 extends Component{

    state={
      medium:"sea"
    }

    mediumHandler=(med)=>{
       this.setState({
         medium:med
       })
    }

    componentDidMount=()=>{

      Aos.init({
        duration: 2000,
        delay: 100
      });

      window.addEventListener("scroll",(e)=>{
        // console.log(e.deltaY);
        if((window.pageYOffset>=(this.props.landing2-200)) && (window.pageYOffset<=this.props.landing2)){
          window.scrollTo({
            top:this.props.landing2
          })
        }

      })

    }

    temperory=()=>{

    }

    render(){

      return (
         <div className="landing1">
             <div className="landing1__1">Freight Forwarding</div>
             <div className="landing1__2">
                <span>F</span>
                <span>R</span>
                <span>E</span>
                <span>I</span>
                <span>G</span>
                <span>H</span>
                <span>T</span>
             </div>
             <div className="landing1__3">INDIA PORT</div>
             <div className="landing1__4">Search your best quotes</div>
             <div className="landing1__5">
                <div className="landing1__5_r1">
                    <div onClick={()=>this.mediumHandler("sea")} className={this.state.medium==="sea"?"landing1__5_r1-item landing1__5_r1-item--1  landing1__5_r1-item--selected":"landing1__5_r1-item landing1__5_r1-item--1"}>
                        <div className="landing1__5_r1-item-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="61.909" height="13.505" viewBox="0 0 61.909 13.505">
                            <path id="Path_1" data-name="Path 1" d="M398.768,586.235s2.611,6.88,12.623,7.549,15.983-7.549,15.983-7.549,3.584,7.643,14.132,7.549,13.942-7.549,13.942-7.549" transform="translate(-396.188 -582.319)" fill="none" stroke={this.state.medium==="sea"?"#fff":"#9fb1c1"} stroke-linecap="round" stroke-width="4"/>
                          </svg>
                        </div>
                        <div className="landing1__5_r1-item-name">SEA</div>
                    </div>
                    <div onClick={()=>this.mediumHandler("land")} className={this.state.medium==="land"?"landing1__5_r1-item landing1__5_r1-item--2  landing1__5_r1-item--selected":"landing1__5_r1-item landing1__5_r1-item--2"}>
                        <div className="landing1__5_r1-item-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="4" viewBox="0 0 48 4">
                                <line id="Line_71" data-name="Line 71" x2="44" transform="translate(2 2)" fill="none" stroke={this.state.medium==="land"?"#fff":"#9fb1c1"} stroke-linecap="round" stroke-width="4"/>
                            </svg>
                        </div>
                        <div className="landing1__5_r1-item-name">LAND</div>
                    </div>
                    <div onClick={()=>this.mediumHandler("air")} className={this.state.medium==="air"?"landing1__5_r1-item landing1__5_r1-item--3  landing1__5_r1-item--selected":"landing1__5_r1-item landing1__5_r1-item--3"}>
                        <div className="landing1__5_r1-item-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61.604" height="13.67" viewBox="0 0 61.604 13.67">
                                <path id="Path_19946" data-name="Path 19946" d="M0,0S2.668,7.03,12.9,7.713,29.229,0,29.229,0s3.662,7.809,14.439,7.713S57.913,0,57.913,0" transform="translate(59.733 9.754) rotate(180)" fill="none" stroke={this.state.medium==="air"?"#fff":"#9fb1c1"} stroke-width="4"/>
                            </svg>
                        </div>
                        <div className="landing1__5_r1-item-name">AIR</div>
                    </div>

                </div>
                <div className="landing1__5_r2">
                   <div className="landing1__5_r2-bWrap">
                       <div className="landing1__5_r2-b1">
                           <div className="landing1__5_r2-b1-place">to</div>
                           <input className="landing1__5_r2-b1-input" type="text" placeholder="Nava Shiv PORT"/>
                           <div className="landing1__5_r2-b1-place">mubbai/india</div>
                       </div>
                       <svg className="landing1__5_r2-bWrap-svg" xmlns="http://www.w3.org/2000/svg" width="33.8" height="20.254" viewBox="0 0 33.8 20.254">
                          <g id="Group_6146" data-name="Group 6146" transform="translate(2.087 1.061)">
                            <path id="Path_19941" data-name="Path 19941" d="M686,755.735h28.092l-5.7-5.7" transform="translate(-686 -750.035)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                            <path id="Path_19942" data-name="Path 19942" d="M716.371,768.5H688.279l5.7,5.7" transform="translate(-686.745 -756.067)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                          </g>
                        </svg>

                       <div className="landing1__5_r2-b1">
                           <div className="landing1__5_r2-b1-place">to</div>
                           <input className="landing1__5_r2-b1-input" type="text" placeholder="Nava Shiv PORT"/>
                           <div className="landing1__5_r2-b1-place">mubbai/india</div>
                       </div>
                   </div>

                   <div className="landing1__5_r2-bWrap">
                       <div className="landing1__5_r2-b1 landing1__5_r2-b1--flex">
                            <input className="landing1__5_r2-b1-date" type="date"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="51" viewBox="0 0 1 51">
                             <line id="Line_70" data-name="Line 70" y2="51" transform="translate(0.5)" fill="none" stroke="#fff" stroke-width="1"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43.875" height="39" viewBox="0 0 43.875 39">
                            <path id="Icon_awesome-boxes" data-name="Icon awesome-boxes" d="M42.656,21.938H36.563V29.25l-2.437-1.622L31.688,29.25V21.938H25.594a1.222,1.222,0,0,0-1.219,1.219V37.781A1.222,1.222,0,0,0,25.594,39H42.656a1.222,1.222,0,0,0,1.219-1.219V23.156A1.222,1.222,0,0,0,42.656,21.938Zm-29.25-4.875H30.469a1.222,1.222,0,0,0,1.219-1.219V1.219A1.222,1.222,0,0,0,30.469,0H24.375V7.313L21.938,5.69,19.5,7.313V0H13.406a1.222,1.222,0,0,0-1.219,1.219V15.844A1.222,1.222,0,0,0,13.406,17.063Zm4.875,4.875H12.188V29.25L9.75,27.628,7.313,29.25V21.938H1.219A1.222,1.222,0,0,0,0,23.156V37.781A1.222,1.222,0,0,0,1.219,39H18.281A1.222,1.222,0,0,0,19.5,37.781V23.156A1.222,1.222,0,0,0,18.281,21.938Z" fill="#fff"/>
                            </svg>
                              <select class="form-control">
                                <option>FLC</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                       </div>
                   </div>

                </div>
                <button className="landing1__5_btn">
                   <span>Search</span>
                   <svg id="Group_6149" data-name="Group 6149" xmlns="http://www.w3.org/2000/svg" width="50.574" height="24.595" viewBox="0 0 50.574 24.595">
                    <g id="Group_6147" data-name="Group 6147" transform="translate(0 0)">
                      <path id="Path_19943" data-name="Path 19943" d="M1606.574,789.272H1556v-2.231h43.5l-7.591-7.7,2.366-2.366Z" transform="translate(-1556 -776.975)" fill="#fff"/>
                    </g>
                    <g id="Group_6148" data-name="Group 6148" transform="translate(0 12.298)">
                      <path id="Path_19944" data-name="Path 19944" d="M1606.574,788H1556v2.231h43.5l-7.591,7.7,2.366,2.366Z" transform="translate(-1556 -788)" fill="#fff"/>
                    </g>
                  </svg>
                </button>

             </div>
             <div className="landing1__6">
                <img src={ship} alt=""/>
             </div>
         </div>
      )
    }
}

export default Landing1;
