import  React, { useState } from "react";
import ImgModal from "../pages/imgModel"




export default function Gallery(img) {
  const [open, setOpen] = React.useState(false);
  const[mode,setMode] = useState(false);
  const [tempImg,setTempImg] = useState('');

  const getImg = (img)=>{
    setTempImg(img);
    setOpen(true);
setMode(true);
  }


  return (
    <>
      <div className="gallery" >
        {
          itemData.map((val,i) => {
            return(
              <div className="pics" key={i} onClick={() => getImg(val.img)} >
                <img src={val.img} style={{width:"100%"}} />
              </div>
            )
          })
        }
      </div>
      <ImgModal setOpen={setOpen} open={open} tempImg={tempImg} />
    </>
  );
}

const itemData = [
  {
    img: '../gallery/pic-7.jpg',
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "../gallery/pic-2.jpg",
    title: "Burger",
    rows: 2,
    cols: 2,
  },
  {
    img: "../gallery/pic-3.jpg",
    title: "Camera",
    rows: 1,
    cols: 2,
  },
  {
    img: "../gallery/pic-4.jpg",
    title: "Coffee",
    cols: 2,
    rows:2,
  },
  {
    img: "../gallery/pic-17.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "../gallery/pic-5.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
   
  },
  {
    img: "../gallery/pic-1.jpg",
    title: "Basketball",
    rows: 2,
  },
  {
    img: "../gallery/pic-6.jpg",
    title: "Fern",
    rows: 2,
    cols: 2,
  },
  {
    img: "../gallery/pic-8.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "../gallery/pic-9.jpg",
    title: "Tomato basil",
  },
  {
    img: "../gallery/pic-18.jpg",
    title: "Sea star",
  },
  {
    img: "../gallery/pic-12.jpg",
    title: "Bike",
    cols: 2,
  },
  {
    img: "../gallery/pic-13.jpg",
    title: "Tomato basil",
  },
  {
    img: "../gallery/pic-15.jpg",
    title: "Sea star",
  },
  {
    img: "../gallery/pic-14.jpg",
    title: "Bike",
    cols: 2,
    rows:2
  },
  {
    img: "../gallery/pic-17.jpg",
    title: "Tomato basil",
  },
  {
    img: "../gallery/pic-12.jpg",
    title: "Sea star",
  },
  {
    img: "../gallery/pic-20.jpg",
    title: "Bike",
    cols: 2,
  },
];
