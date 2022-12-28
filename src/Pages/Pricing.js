import React from "react";
import '../CSS/pricing.css';
import Data from '../Context/PricingCards.json';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {MdDoDisturb} from 'react-icons/md';
const Pricing = () => {
  return (
    <div className="container-fluid pricing">
      <div className="container">
        <div className="row row-1">
          <div className="text-center">
            <h1 className="display-3 fw-semibold">Pricing Options</h1>
            <p className="text-muted fs-5">
              You can try the free trial option to begin testing Enhance AI, or
              commit<br/> to a entry or pro plan to get started immediately!
            </p>
          </div>
        </div>
        <div className="row">
          {Data.map((item,index)=>{
            return <div className="col-lg-5 my-3 col-xl-4 col-md-8 col-sm-12 col-10 text-muted mx-auto p-3" key={index}>
              <div className="p-5 border shadow pricing-cards">
                <h2 className="">{item.title}</h2>
                <div className="d-flex align-items-center">
                  <h2 className="fs-bold">{item.money}</h2><span className="fs-5">{item.triel}</span>
                </div>
                <p className="fs-5">{item.text}</p>
                <ul className="nav d-block text-dark">
                 {item.options.map((opt,key)=>{
                  return <li key={key} className={`${opt.disabled?"text-muted":""} nav-item border-bottom p-3`}>{opt.disabled?<MdDoDisturb size={20} /> :<BsFillArrowRightCircleFill size={20} />}  <span className="mx-2">{opt.text}</span></li>
                 })}
                </ul><br/>
                <div className="text-center">
                <button className="btn btn-light mx-auto btn-lg text-light" style={{backgroundImage:item.color}}>{item["btn-text"]}</button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
