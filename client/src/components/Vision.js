import React, { useEffect } from "react";
import { Container,Row } from "react-bootstrap";
import AOS from "aos"

const Vision = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <Container className="vision"  >
      <Row className=" mt-4" >
        <h2 className=" font-bold text-5xl mt-1 smtext-5xl text-[gray] capitalize font-[Roboto Slab]" data-aos="fade-up" >Our Vision</h2>

        <p style={{fontSize:'25px'}} data-aos="fade-up" >
        Our vision is to inspire our employees to be the best they can be. In future, we are overseeing expansion in more cities and new divisions with new clients to maximize the growth opportunities for our people.
        </p>
        {/* <br /> */}
        <p data-aos="fade-up" >Our Mission is to be the pre-eminent face to face marketing organization in world wide.</p>
        <p className=" sm:text-4xl text-[gray] " data-aos="fade-up" >
          Have to open up more branches in all over india and wish to achieve
          bigger than this.
        </p>
      </Row>
    </Container>
  );
};

export default Vision;
