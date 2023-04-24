import { Button, TextField } from "@mui/material";

import React from "react";
import { GoLocation } from "react-icons/go";
import { FcPhone } from "react-icons/fc";
import { GrMail } from "react-icons/gr";

const ContactUs = () => {
  return (
    <>
      <div className="w-[100%] h-[30vh] bg-[black] p-5 flex justify-center items-start flex-col text-[white] ">
        <p className="p-2 sm:text-4xl text-2xl font-normal hover:text-[green] " data-aos="slide-left"  >Connect</p>
        <h2 className="sm:px-5 text-xl sm:text-3xl font-normal" data-aos="fade-up" >
          We’d love to hear from you, get in touch with us
        </h2>
      </div>
      <h2 className="sm:text-5xl text-xl p-3 capitalize ">
        Let's work together and make something that matters.
      </h2>

      <div className=" flex justify-center p-3 ">
        <div className="flex sm:flex-row flex-col w-[100%] ">
          <div className="flex w-[100%]  sm:flex-row flex-col justify-around items-center">
            <span>
              <span>
                <GoLocation className="text-2xl" />
              </span>
              <p className="sm:text-xl">Imperial management,Thamara tower</p>
              <p className="sm:text-xl">3rd floor above hdfc bank</p>
              <p className="sm:text-xl">
                Srinivasan nagar Vayaloor main road Trichy – 620017.
              </p>
            </span>
            <div>
              <span>
                <FcPhone className="text-2xl" />
              </span>
              <p className="sm:text-xl">+91 6369595178</p>
              <p className="sm:text-xl">+91 6369595178</p>
            </div>
            <div>
              <span>
                <GrMail className="text-2xl" />
              </span>
              <p className="sm:text-xl">anjalihrimperial@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-xl w-[100%] h-[400px]  sm:flex-row bg-slate-100  ">
        <div className=" flex justify-center items-center flex-col mb-3 ">
          <h2 className="capitalize sm:text-6xl text-2xl mb-4 ">
            Feel free to Contact us
          </h2>
          <form action="https://formspree.io/f/mjvznayq" method="POST" className="flex sm:flex-col  flex-col">
            <TextField
              type="text"
              name="name"
              required
              className="m-2 sm:w-[500px] w-[100vw] p-2 "
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              type="email"
              name="email"
              required
              className="m-2 sm:w-[500px] w-[100vw] p-2 "
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              type="textarea"
              name="message"
              className="m-2 sm:w-[500px] w-[100vw] p-2 "
              id="outlined-basic"
              label="Message"
              variant="outlined"
            />
            <Button
              variant="contained"
              type="submit"
              className="m-2 sm:w-[500px] w-[100vw]  "
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="w-[100%] h-[60vh] mt-1 shadow-lg ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.958259396941!2d78.6670176!3d10.8145063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5783ea6aa7b%3A0x3ffbf49fea1de401!2sImperial%20Management!5e0!3m2!1sen!2sin!4v1670516337463!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
