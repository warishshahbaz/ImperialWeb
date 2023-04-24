import { Button } from "@mui/material";
import React, { useState } from "react";
import JobModal from "./jobs";

const Career = () => {
  const [open, setOpen] = useState(false);
  const JobFun = () => {
    setOpen(true);
  };
  return (
    <>
      <div
        className="
        w-[100%] h-[30vh] sm:h-[45vh] grid text-[white] 
        careerHeader
       "
      >
        <div className=" mt-12 p-4 ">
          <p
            className="text-xl text-[black] font-bold sm:font-bold"
            data-aos="flip-up"
          >
            What we do?
          </p>
          <div className="flex sm:flex-row flex-col  ">
            <h2
              className="mr-10 text-xl sm:font-bold font-medium  sm:text-3xl md:text-4xl text-[black]"
              data-aos="flip-up"
            >
              We build creative experience
            </h2>
            <Button
              style={{ borderRadius: "23px" }}
              onClick={JobFun}
              variant="contained"
              data-aos="slide-left"
              size="medium"
            >
              Browse Jobs
            </Button>
          </div>
        </div>
      </div>
      {/* <div className=" flex justify-center items-center " >
        <img src="./image/career-map.jpg" className=" md:w-[80vw]  " alt="logo" />
      </div> */}
      <div className="grid md:grid-cols-2 mt-2 w-full place-content-around place-items-center ">
        <img
          data-aos="flip-up"
          src="https://www.alzaincorporation.com/wp-content/themes/alza/assets/images/services/ba.png"
          alt=""
        />
        <div className="">
          <h2
            className="font-serif mt-2 p-2 sm:text-3xl text-2xl "
            data-aos="slide-left"
          >
            BUSINESS ASSOCIATE (BA)
          </h2>
          <p className="p-md text-sm md:text-xl font-sen " data-aos="fade-left">
            A business associate is required to attend corporate meetings,
            tele-calling residential meetings, several training workshops and
            earn more profitability. Responsibilities : The responsibilities of
            a Business Associate comprise of:- Accredited Product Training
            Understanding Application Process Quality Management Meeting Client
            Expectations Implementing the System Process Demonstrating a
            Positive Self-image Benefits : The benefits obtained from the
            Business Associate role: Conveying a Positive Attitude Customer
            Service Skills Time Management Work Ethics Accountability Consistent
            Performance Profitability ━━{" "}
            <span className="text-[gray] text-sm sm:text-lg ">
              Tenure : 3-4 Weeks
            </span>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 p-3 ">
        <div>
          <h2
            className="font-serif mt-2 p-2 sm:text-3xl text-2xl"
            data-aos="slide-left"
          >
            HRD TRAINER
          </h2>
          <p
            className="p-md text-sm md:text-xl -2 font-sen "
            data-aos="fade-left"
          >
            The role of an HRD trainer is to observe people or situations,
            recruitment and retention of employees, actively conduct training
            sessions, give corporate presentations, set examples for others to
            follow and focus on personal recruitment. Responsibilities : The
            responsibilities of an HRD Trainer consist of:- Training &
            Development Planning for Personal & Team Development Team Building
            Activities Earning the Observation Understanding the Recruitment
            Process Final Evaluation Process Understanding Key Administrative
            Procedures Benefits : The benefits obtained from the HRD Trainer
            role:- Profitability People Management Skills Team Management
            Problem Solving Skills Conflict Management Skills ━━{" "}
            <span className="text-[gray]">Tenure : 8-12 Weeks</span>
          </p>
        </div>
        <img
          data-aos="flip-up"
          src="https://www.alzaincorporation.com/wp-content/themes/alza/assets/images/services/trainera.png"
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-2 p-3 ">
        <img
          data-aos="flip-up"
          src="https://www.alzaincorporation.com/wp-content/themes/alza/assets/images/services/leader.png"
          alt=""
        />
        <div>
          <h2
            className="font-serif mt-2 p-2 sm:text-3xl text-2xl "
            data-aos="slide-left"
          >
            EXECUTIVE TRAINER / CREW LEADER
          </h2>
          <p className="p-md text-sm md:text-xl font-sen " data-aos="fade-left">
            The Executive trainer / Crew Leader is expected to build a capable
            team and continuously motivate them, set certain goals, effortlessly
            manage their territories, practice sharing & networking, inculcate
            leadership skills and encourage team development. Responsibilities :
            The responsibilities of an Executive Trainer / Crew Leader consist
            of:- Team Building Sales Management Networking Territory Management
            Goal Setting/ Impact Sessions Benefits : The benefits obtained from
            an Executive Trainer/ Crew Leader role:- Motivational Skills
            Decision Making Skills Client Interactions Corporate Presentations
            ━━<span className="text-[gray]">Tenure : 8-12 Weeks</span>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 p-3 ">
        <div>
          <h2
            className="font-serif mt-2 p-2 sm:text-3xl text-2xl "
            data-aos="slide-left"
          >
            ASSISTANT MANAGER
          </h2>
          <p className="p-md text-lg md:text-xl font-sen " data-aos="fade-left">
            An Assistant Manager would be responsible for planning and
            strategizing, conducting interviews, handling office administration
            and its dynamics, carrying out sales impact sessions and effectively
            managing all the finances and accounting work. Responsibilities :
            The responsibilities of an Assistant Manager comprise of:- Personal
            Development Developing & Coaching Trainers Understanding Ownership
            Revenue Management Monitoring Quality & Performance Planning &
            Strategizing Conducting Interviews Benefits : The benefits gained
            from undertaking the responsibilities of an Assistant Manager role:-
            Crisis Management Territory Management Multitasking Skills Human
            Behavioural Pattern ━━{" "}
            <span className="text-[gray]">Tenure : 8-12 Weeks</span>
          </p>
        </div>
        <img
          data-aos="flip-up"
          src="https://www.alzaincorporation.com/wp-content/themes/alza/assets/images/services/asst.png"
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-2 p-3 ">
        <img
          data-aos="flip-up"
          src="https://www.alzaincorporation.com/wp-content/themes/alza/assets/images/services/owner.png"
          alt=""
        />
        <div>
          <h2
            className="font-serif mt-2 p-2 sm:text-3xl text-2xl "
            data-aos="slide-left"
          >
            OWNER PARTNER / SBU HEAD
          </h2>
          <p className="p-md text-lg md:text-xl font-sen " data-aos="fade-left">
            An owner partner is accountable for the overall handling and running
            of a profitable organization, framing a business plan, attending
            international seminars and networking with several offices globally.
            Responsibilities : The owner of a profitable organization means that
            the individual would be required to fulfill certain responsibilities
            like: - Overall Handling and Running an Organization Networking with
            Other Offices Nationally & Internationally Understanding
            Recruitment, Administration, Finance & Customer Service Strategies
            Benefits : The benefits gained from undertaking the responsibilities
            of an Owner/ Partner/ SBU Head role:- Business Planning Be Your Own
            Boss Income Growth Chance to Start New Client Portfolios
            International Exposure & Travel Opportunities ━━{" "}
            <span className="text-[gray]">Tenure : 8-12 Weeks</span>
          </p>
        </div>
      </div>
      <JobModal setOpen={setOpen} open={open} />
    </>
  );
};

export default Career;

// [
//   {
//     fieldname: 'file',
//     originalname: 'Resume-MD SHAHBAZ.pdf',
//     encoding: '7bit',
//     mimetype: 'application/pdf',
//     buffer: <Buffer 25 50 44 46 2d 31 2e 35 0a 25 b5 ed ae fb 0a 31 31 20 30 20 6f 62 6a 0a 3c 3c 20 2f 4c 65 6e 67 74 68 20 31 32 20 30 20 52 0a 20 20 20 2f 46 69 6c 74 ... 47590 more bytes>,
//     size: 47640
//   }
// ]

// {
//   file : [
//     {
//       fieldname: 'file',
//       originalname: 'Resume-MD SHAHBAZ.pdf',
//       encoding: '7bit',
//       mimetype: 'application/pdf',
//       buffer: <Buffer 25 50 44 46 2d 31 2e 35 0a 25 b5 ed ae fb 0a 31 31 20 30 20 6f 62 6a 0a 3c 3c 20 2f 4c 65 6e 67 74 68 20 31 32 20 30 20 52 0a 20 20 20 2f 46 69 6c 74 ... 47590 more bytes>,
//       size: 47640
//     }
//   ],

// name:ffd,
// email:fdggdf,
// phone
// }
