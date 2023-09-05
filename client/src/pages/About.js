import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import HeighRolEmply from "../components/HeighRolEmply";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="bg-[black] w-[100%]  text-[white] md:p-[24px] ">
        <div className="w-[100%] flex justify-center items-start p-[23px] flex-col ">
          <span className="text-5xl font-serif " data-aos="slide-left">
            Who We Are?
          </span>
          <p className="mt-3 text-xl font-sen sm:p-3 p-1" data-aos="fade-up">
            Imperial management is a young emerging firm in the global market
            providing independent platform for emerging leaders for the field of
            service and management in this competitive market. Imperial
            management is one of the largest face to face advertising company
            working with multiple clients from the fortune 500 companies. We are
            part of Global network where already we have office in 32 country
            with more than 1200 offices around the world. Now we are looking for
            expansion in all across Tamilnadu and Kerala. We are a dynamic team
            of creatives comprised of marketing, Communications specialists and
            business development professionals. We provide global platform to
            ambitious leaders in the diverse and competitive Indian market in
            the field of service and management looking for a partner in
            branding/promotions, client servicing, advertising and
            communications requirements. The important word in the last is
            “partner” We work with you, for you.
          </p>
          <span className="text-4xl font-serif " data-aos="slide-left">
            Our Vision
          </span>
          <p className="mt-3 text-xl font-sen p-3 " data-aos="fade-up">
            Our vision is to inspire our employees to be the best they can be.
            In future, we are overseeing expansion in more cities and new
            divisions with new clients to maximize the growth opportunities for
            our people.
          </p>
          <span className="text-4xl font-serif " data-aos="slide-left">
            Our Mission
          </span>
          <p className="mt-3 sm:text-xl font-sen p-3" data-aos="fade-up">
            Our Mission is to be the pre-eminent face to face marketing
            organization in world wide.
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-normal p-3 ">Business Head</h1>
      <div className="flex sm:flex-row flex-col w-full ">
      <div className="sm:w-[40%] w-full flex justify-center flex-col items-center " >
      <img
          className=" shadow-lg  grid  md:h-[300px] md:w-[300px] w-[200px] h-[200px] rounded-[50%]  md:object-fill object-cover"
          src="/gallery/minhaz.jpg"
          alt="minhaz"
        />
        <p
          className="md:text-lg text-lg  font-serif text-[gray] p-0"
          data-aos="slide-left"
        >
          Managing Director : MD MINHAZ
        </p>
      </div>
       
        <p 
          className=" sm:w-[60%] p-2 w-full text-lg font-serif md:text-xl md:text-center text-start "
          data-aos="fade-up"
        >
          After completing my B.E EEE was looking for a career where I can live
          the life the way I wanted to live.I answer an add from TIMES JOBS and
          got opportunity to build my career. During this journey have gone
          through lot many challenges .Being a north Indian it took little while
          to understand the culture and environment. Eventhough I take it as a
          challenge and proved myself. By following the system of the company I
          developed my skills by working hard which helped me to run a
          successful business unit in Trichy and looking for expansion in all
          across Tamilnadu where i can provide this opportunity to more leader
          who can use this opportunity to build there carrier i believe
          everything is possible to achieve in life if u keep trying until you
          achieve .
        </p>

       
      </div>
      <h3 className=" text-3xl font-normal font-serif text-center mb-2  ">
          Our Core Leader's
        </h3>
      <div className=" w-[100%] flex sm:flex-row flex-col justify-around items-center ">
        {data.map((val, i) => {
          return (
            <div className="flex justify-between items-center ">
              <HeighRolEmply val={val} />
            </div>
          );
        })}
      </div>

      {/* <div className="w-[100%] mt-4 flex sm:flex-row justify-center items-center flex-wrap flex-col  ">
        <div data-aos="zoom-out-up"  className="w-[270px]  p-3 shadow-lg m-2 text-center ">
          <div className="w-[100%]  object-cover  ">
            <img
              className="w-[270px] h-[300px] object-cover rounded-lg  "
              src="/image/anjali.jpg"
              alt="leo"
            />
          </div>
          <h5>Anjali</h5>
          <p>HR Manager </p>
        </div>
        <HeighRolEmply  />
        <div data-aos="zoom-out-up"
          className="w-[270px]  p-3 shadow-lg m-2 text-center   "
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        >
          <img
            className="w-[250px] h-[300px] object-cover rounded-lg "
            src="/image/leo.png"
            alt="leo"
          />
          <h5>Leo Regish</h5>
          <p>Crew Leader</p>
        </div>
        <div data-aos="zoom-out-up" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-[270px]  p-3 shadow-lg m-2 text-center  ">
          <img
            className="w-[250px] h-[300px] object-cover rounded-lg "
            src="/image/employee2.jpg"
            alt="leo"
          />
          <h5>Atchaya S</h5>
          <p>Team Leader</p>
        </div>
        <div data-aos="zoom-out-up"  className="w-[270px]  p-3 shadow-lg m-2 text-center">
          <img
            className="w-[250px] h-[300px] object-cover rounded-lg "
            src="/image/employee3.jpg"
            alt="leo"
          />
          <h5>Uvarasakumar</h5>
          <p>Executive leader</p>
        </div>
        <div data-aos="zoom-out-up" className="w-[250px]   p-3 shadow-lg m-2 text-center  ">
          <img
            className="w-[250px] h-[300px] object-cover rounded-lg "
            src="/image/employee4.jpg"
            alt="leo"
          />
          <h5>Abinaya</h5>
          <p>Executive leader</p>
        </div>
      </div> */}
    </>
  );
};

export default About;

const data = [
 
  {
    id: 2,
    img: "/image/leo.png",
    title: "Leo Regish",
    about: "Crew Leader",
  },
  {
    id: 3,
    img: "/image/employee2.jpg",
    title: "Atchaya s",
    about: "Executive leader",
  },
  {
    id: 4,
    img: "/image/employee4.jpg",
    title: "Abinaya",
    about: "Executive leader",
  },
];
