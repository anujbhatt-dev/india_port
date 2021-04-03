import React, {Component} from "react"
import $ from "jquery"
import i from "../../../assets/images/i.svg"
import leaf2 from "../../../assets/images/leaf2.svg"
import halfArrow from "../../../assets/images/halfArrow.svg"
import box from "../../../assets/images/box.svg"
import s1 from "../../../assets/images/s1.png"
import plus from "../../../assets/images/plus.svg"
import dash from "../../../assets/images/dash.svg"
import video from "../../../assets/images/video.svg"
import add from "../../../assets/images/add.svg"


import Aos from "aos"
import "aos/dist/aos.css"


class CbmCalc extends Component{

   state={

      level:0,
      // invalids:{1:1,2:1,3:1,4:1,5:1},
      valids:{},
      data:{},
      updated:true,
      total:null,
      mobileFields:[1],

  }


  componentDidUpdate=()=>{

      // console.log(this.state)

      if(!this.state.updated){
          let data={...this.state.data};

          Object.keys(this.state.valids).forEach(key=>{
              // alert(key)
              data[key]={...data[key], ans:((data[key].len*data[key].wid*data[key].hei))/(data[key].uni==="cm"?1000000:1)}

          })

          this.setState({updated:true, data:data});

      }

  }

  addLevel=()=>{
      this.setState(s=>{return {level:s.level+1}})
  }

  validToogle=(i, valid)=>{
         let valids={...this.state.valids};
         let invalids={...this.state.invalids};

         if(!valid){
             invalids={...invalids,[i]:1};
             delete valids[i];
         }else{
             valids={...valids,[i]:1};
             delete invalids[i];
         }

         this.setState({valids:valids, invalids:invalids, updated:false})
  }

  onChange=(id,e)=>{

      // alert(e.target.value)
      let val=e.target.value;
      let name=e.target.name;
      let data={...this.state.data};

      if(val===""){
          delete data[id][name];
          this.validToogle(id, false);

      }else{

          data[id]={...data[id], [name]:val};
          if((data[id].len&&data[id].wid&&data[id].hei)||(data[id].len&&data[id].wid&&name==="hei")||(data[id].hei&&data[id].wid&&name==="len")||(data[id].hei&&data[id].len&&name==="wid"))
            {
                this.validToogle(id, true);

           }
         }

         this.setState({data:data, updated:false, total:null});
  }

  calculateTotal=()=>{

      let total=0;

      Object.keys(this.state.valids).forEach(key=>{

          total+=this.state.data[key].ans;

      })

      this.setState({total:total});

  }





  componentDidMount=()=>{

    window.scrollTo({
        top:0,
        behavior:"auto"
      })

    $(".navigation").css("background-color", "transparent");
    $(".navigation").css("position", "fixed");
    // $(".navigation").css("margin", "0 25rem");

    Aos.init({
      duration: 2000,
      delay: 100
    });

  }

  componentWillUnmount=()=>{
    $(".navigation").css("background-color", "#F7F7F7");
    $(".navigation").css("position", "static");
    // $(".navigation").css("margin", "0 10vw");
  }
  addField=()=>{

   this.setState((s)=>{
      return {mobileFields:[...s.mobileFields, s.mobileFields.length+1],}
   })

  }


  invalidate=(i)=>{
    this.validToogle(i, false);
  }

    render(){

      return (
         <div className="cbmCalc ">
             {!this.props.mobile?
                <div className="invoice__box">
                <img className="invoice__box_bot" onClick={this.calculateTotal} src={leaf2} alt=""/>
                <img data-aos="fade-up" className="invoice__box_big cbmCalc__box_big" src={box} alt=""/>
                <img  data-aos="fade-right" className="invoice__box_arr" src={halfArrow} alt=""/>
                <img className="invoice__box_i1" src={i} alt=""/>
                <div className="cbmCalc__head">CBM Calculator</div>
                <div className="invoice__box_go" onClick={this.calculateTotal}>GO</div>

                <div className="cbmCalc__box_total  cbmCalc__mob--total">
                <span className="cbmCalc__box_total-text">Total</span>
                   {this.state.total?
                    <span className="cbmCalc__box_total-number">{this.state.total+" INR"}</span>:
                    <span className="cbmCalc__box_total-number">0</span>}
                </div>

                <table cellspacing="15" className="cbmCalc__table">
                   <thead>
                      <td>Sr.No.</td>
                      <td>Length</td>
                      <td>Width</td>
                      <td>Height</td>
                      <td>Unit</td>
                      <td>CBM</td>
                   </thead>
                   <tbody>
                      {[1,2,3,4,5].map(id=>
                      <tr>
                         <td className="cbmBack__table-sr" style={{position:"relative"}}  ><p className="cbmCalc__p">{this.state.valids[id]?<p>{id}<i onClick={this.state.valids[id]?()=>{this.invalidate(id)}:null}  style={{position:"absolute",top:"-0.5rem",right:"-0.5rem",color:"black",fontSize:"2rem"}} className="fa fa-times" aria-hidden="true"></i></p>:<i className="fa fa-plus" aria-hidden="true"></i>}</p></td>
                         <td  className="cbmBack__table-input"><input onChange={(e)=>this.onChange(id,e)}  value={this.state.data[id]&&this.state.data[id].len?this.state.data[id].len:null} placeholder="len" name="len" type="number"/></td>
                         <td  className="cbmBack__table-input"><input onChange={(e)=>this.onChange(id,e)}  value={this.state.data[id]&&this.state.data[id].wid?this.state.data[id].wid:null} placeholder="wid" name="wid" type="number"/></td>
                         <td  className="cbmBack__table-input"><input onChange={(e)=>this.onChange(id,e)}  value={this.state.data[id]&&this.state.data[id].hei?this.state.data[id].hei:null} placeholder="hei" name="hei" type="number"/></td>

                         <td className="cbmBack__table-input">
                            <select className="invoice__box_flex-input" onChange={(e)=>this.onChange(id,e)} name="uni"  id="">
                               <option value="m">m</option>
                               <option value="cm">cm</option>
                            </select>
                            </td>
                         <td className=" cbmCalc__box_total-number">{this.state.valids[id]?(this.state.data[id].ans+" INR"):0}</td>
                        </tr>
                      )}
                   </tbody>
                </table>
            </div>:
            [ <h1 className="cbmCalc__mob_head">cbm calculator</h1>,
            <div className="cbmCalc__mob">
               <img className="invoice__box_bot cbmCalc__mob--bot" onClick={this.calculateTotal}  src={leaf2} alt=""/>
               <img  className="invoice__box_arr  invoice__box_arr--mod" src={halfArrow} alt=""/>
               <div className="invoice__box_go invoice__box_go--mod" onClick={this.calculateTotal}>GO</div>
               <div className="cbmCalc__box_total  cbmCalc__mob--total">
               <span className="cbmCalc__box_total-text cbmCalc__box_total-text--mod">Total</span>
               {this.state.total?
                <span className="cbmCalc__box_total-number cbmCalc__box_total-number--mod">{this.state.total+" INR"}</span>:
                <span className="cbmCalc__box_total-number cbmCalc__box_total-number--mod">-</span>}
               </div>
               <div className="cbmCalc__mob_flex">
                 {/* <span  className="cbmCalc__mob_flex-span0 cbmCalc__mob_flex-span1"></span> */}
                 <span placeholder="len" className="cbmCalc__mob_flex-span2" type="text">Length</span>
                 <span placeholder="len" className="cbmCalc__mob_flex-span2" type="text">Width</span>
                 <span placeholder="len" className="cbmCalc__mob_flex-span2" type="text">Height</span>
                 <span placeholder="len" className="cbmCalc__mob_flex-span2" type="text">Unit</span>
                 <span placeholder="len" className="cbmCalc__mob_flex-span2" type="text">CBM</span>
               </div>

               {[...this.state.mobileFields].map(id=>
                  <div className="cbmCalc__mob_flex">
                      {/* <span  className="cbmCalc__mob_flex-span0 cbmCalc__mob_flex-span1">{id}</span> */}
                    <input className="cbmCalc__mob_flex-span2"  onChange={(e)=>this.onChange(id,e)}  value={this.state.data[id]&&this.state.data[id].len?this.state.data[id].len:null} placeholder="len" name="len" type="text"/>
                    <input className="cbmCalc__mob_flex-span2"  onChange={(e)=>this.onChange(id,e)}  value={this.state.data[id]&&this.state.data[id].wid?this.state.data[id].wid:null} placeholder="wid" name="wid" type="text"/>
                    <input className="cbmCalc__mob_flex-span2"  onChange={(e)=>this.onChange(id,e)}  value={this.state.data[id]&&this.state.data[id].hei?this.state.data[id].hei:null} placeholder="hei" name="hei" type="text"/>
                    <span className="cbmCalc__mob_flex-span2">
                        <select className="invoice__box_flex-input" onChange={(e)=>this.onChange(id,e)} name="uni"  id="">
                           <option value="m">m</option>
                           <option value="cm">cm</option>
                        </select>
                     </span>
                     <span className="cbmCalc__mob_flex-span2">{this.state.valids[id]?(this.state.data[id].ans+" INR"):"0"}</span>
                    </div>
                  )}
               <div  className="cbmCalc__mob_flex">

               </div>
          </div>,
          <button className="addd" onClick={this.addField}> + ADD</button>
          ,
         ]
           }


             <div className="invoice__head">HOW to use cbm calculator</div>
             <div className="invoice__video">
                 <img  className="invoice__video" src={video} alt=""/>
             </div>

             <div className="invoice__flex">
                  <img src={s1} alt=""/>
                  <div className="invoice__flex_text">
                       <div className="cbmCalc__black invoice__flex_text-1">Step 1</div>
                       <div className="cbmCalc__black invoice__flex_text-2">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="cbmCalc__black invoice__flex_text-3">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                   </div>
             </div>

             <div className="invoice__flex invoice__flex--rev">
                  <div className="invoice__flex_text invoice__flex_text--rev">
                       <div className="cbmCalc__black invoice__flex_text-1">Step 2</div>
                       <div className="cbmCalc__black invoice__flex_text-2 invoice__flex_text-2--rev">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="cbmCalc__black invoice__flex_text-3 invoice__flex_text-3--rev">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                  </div>
                  <img src={s1} alt=""/>
             </div>

             <div className="invoice__flex invoice__flex--last">
                  <img src={s1} alt=""/>
                  <div className="invoice__flex_text">
                       <div className="cbmCalc__black invoice__flex_text-1">Step 3</div>
                       <div className="cbmCalc__black invoice__flex_text-2">Easy use<br/>of cbm<br/>calculator</div>
                       <div className="cbmCalc__black invoice__flex_text-3">Lorem ipsum dolor sit amet,<br/>consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor<br/>invidunt ut labore et dolore magna aliquyam erat</div>
                  </div>
             </div>
         </div>
      )
    }
}

export default CbmCalc;
