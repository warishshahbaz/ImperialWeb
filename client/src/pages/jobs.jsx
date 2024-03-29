import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, Input, InputLabel } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:"30vh",
  minWidth: "300px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  "@media (max-width:500px )":{
    top: "30%",
    left: "28%",
  }
};

const BASE_URL = "http://localhost:8080";

export default function JobModal({ setOpen, open }) {
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [data, setData] = useState({});

  const [file, setFile] = useState();
  const saveFile = (e) => {
    setFile(e.target.files[0]); 
  };

  const fetchData = async (resumeFile) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      let res = axios
        .post(
          `http://api.imperialmanagement.in/api/career/apply`,
          formData
        )
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandle = async () => {
    if (name || email || phone) {
      setData({
        name,
        email,
        phone,
      });
      fetchData(data);
    }

    fetchData(data);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style} >
          <ClearIcon
            sx={{ position: "absolute", top: "12px", right: "12px" }}
            onClick={() => setOpen(false)}
          />

          <Typography
            sx={{ fontSize: "1.4rem", fontWeight: "600" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Apply For
          </Typography>
          <Typography sx={{ color: "yellowgreen", fontSize: "1.2rem" }}>
            Business Associate(BA)
          </Typography>
          <div className="flex flex-col p-4 sm:w-[100%]  justify-center items-center ">
            <FormControl sx={{ marginBottom: "14px", width: "100%" }}>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input
                id="my-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "14px", width: "100%" }}>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "14px", width: "100%" }}>
              <InputLabel htmlFor="my-input">Phone Number</InputLabel>
              <Input
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "14px", width: "100%" }}>
              {/* <InputLabel htmlFor="my-input">Phone Number</InputLabel> */}
              {/* <Input
                type="file"
                id="my-input"
                aria-describedby="my-helper-text"
                // value={file}
                onChange={(e) => setFiles(e.target.files)}
              /> */}
              <input type="file" onChange={saveFile} />
            </FormControl>
            <FormControl sx={{ marginBottom: "14px", width: "100%" }}>
              <Button onClick={submitHandle} variant="contained">
                Apply Here...
              </Button>
            </FormControl>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
