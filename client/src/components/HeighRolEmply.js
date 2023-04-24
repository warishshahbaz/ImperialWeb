import React from "react";
import "./heighRoll.css";

const HeighRolEmply = ({val}) => {
  return (
    <>
      <div class="cards">
        <div class="imgbox">
          <img
            className="imgs"
            src={val?.img}
          />
        </div>

        <div class="content">
          <h2>{val?.title}</h2>
          <p>
            {val?.about}
          </p>
        </div>
      </div>
      {/* <div class="cards">
      <div class="imgbox">
        <img
         className='imgs' src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>

      <div class="content">
        <h2>keep Smiling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          doloribus vitae fugit enim repudiandae
        </p>
      </div>
    </div>
    <div class="cards">
      <div class="imgbox">
        <img
         className='imgs' src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>

      <div class="content">
        <h2>keep Smiling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          doloribus vitae fugit enim repudiandae
        </p>
      </div>
    </div> */}
    </>
  );
};

export default HeighRolEmply;
