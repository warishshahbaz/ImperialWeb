import React, { useEffect } from "react";
import { ImForward } from "react-icons/im";
import AOS from 'aos'
import HeighRolEmply from "./HeighRolEmply";

// import Pic2 from "../../image/Pic2.png";
// import { Card, Col, Container, Row } from "react-bootstrap";

function Home() {
 
    useEffect(()=>{
      AOS.init({duration:2000});
    },[]);
  return (
    <>
      <div className="p-4 about  ">
        <div className="flex justify-center align-items-center flex-col lg:flex-row  ">
          <div className="" >
            <h3 className="text-4xl sm:text-6xl" >Who we are ?...</h3>
            <div className="flex-1" data-aos="fade-up"  data-aos-delay="100" >
              <p className="">
                <span className="">
                  <ImForward />
                </span>
                Imperial management is a young emerging firm in the global
                market providing independent platform for emerging leaders for
                the field of service and management in this competitive market.
              </p>
              <span>
                <ImForward />
              </span>
              <p>
                {" "}
                Imperial management is a part of a global network that sells
                products and services on behalf of blue-chip companies.
              </p>
              <p>
                <span>
                  <ImForward />
                </span>
                We take pride in helping to add value to the clients we
                represent of the bottom line by securing new customers, or
                raising awareness of their services. And our performance-based
                model means they only pay for the results we deliver.
              </p>
              <p>
                <span>
                  <ImForward />
                </span>
                We believe responsible face-to-face marketing creates a
                connection with consumers, delivers value to clients, and
                supports small businesses and entrepreneurs
              </p>
              
            </div>
          </div>

          <div className="p-3 rounded-circle  " data-aos="slide-left">
            <img src={"/image/pic2.png"} className=" w-[300px] h-[300px] rounded-circle "  alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
