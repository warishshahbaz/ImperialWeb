import { AccountCircle, AccountCircleRounded } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

const Conatct = () => {
  const handleSend = async (data) => {};
  return (
    <Container fluid className=" mb-2 contacts">
      <div className="flex lg:flex-row flex-col ">
        <div>
        
          <h2>Contact Us</h2>
          <Col>
            {/* <Form action="https://formspree.io/f/mjvznayq"  method="POST" >
          <TextField id="standard-basic" type='text' label="Name" name="name" variant="standard" />
          <TextField id="standard-basic" type='text' label="Email" variant="standard" />
          <TextField id="standard-basic" type='text' label="Phone" variant="standard" />
          <TextField id="standard-basic" type='textarea' label="message" variant="standard" />
            <Button>Send</Button> */}
            <div className="flex flex-col">
              <Box
                sx={{ display: "flex", alignItems: "flex-end", padding: "4px" }}
              >
                <AccountCircleRounded
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  type="text"
                  required
                  label="Name"
                  variant="standard"
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-end", padding: "4px" }}
              >
                <MarkunreadIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  type="text"
                  required
                  label="Phone"
                  variant="standard"
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-end", padding: "4px" }}
              >
                <PhoneIphoneIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Email"
                  type="email"
                  required
                  variant="standard"
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-end", padding: "4px" }}
              >
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Message"
                  type="textarea"
                  variant="standard"
                />
              </Box>
              <Button
                size="medium"
                variant="contained"
                sx={{ marginTop: "12px" }}
                onClick={handleSend}
              >
                Send
              </Button>
            </div>
          </Col>
        </div>

        <Col>
          <img src={"/image/contacts.png"} height={50} alt="contact" />
        </Col>
      </div>
    </Container>
  );
};

export default Conatct;
