import {useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import '../asserts/style/style.css';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {GoMail} from 'react-icons/go';

import {useMediaQuery, Paper, TextField, InputAdornment} from '@mui/material';
function Contact() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div className="mt-4 ">
      <div className="p_top d-flex flex-column align-items-start">
        <div
          style={{
            color: '#C778DD',
            fontSize: 19,
            marginRight: `20px`,
            display: 'flex',
          }}
        >
          /<span className="spantext">Contacter moi </span>
          ────────
        </div>
        <text className="text2 mt-1">
          Si vous êtes intéressé par mon CV ou si vous avez des questions,
          n'hésitez pas à me contacter par e-mail. Vous pouvez m'envoyer un
          message en m'écrivant directement à e-mail ou LinkedIn. Je serais ravi
          de répondre à vos questions et de discuter de toute opportunité de
          collaboration.
        </text>
      </div>
      <Paper
        className="paper_contact"
        elevation={6}
        sx={{
          backgroundColor: '#282c33',
          color: 'white',
          fontFamily: `'Fira Code', cursive`,
        }}
      >
        <div className="media_link">
          <a href="https://github.com/AzPrime44">
            <FaGithub style={{color: '#afb5bc'}} title="Check my Github" />
          </a>
          <a href="https://www.linkedin.com/in/abdoul-aziz-ebe/">
            <FaLinkedinIn
              style={{color: '#afb5bc'}}
              title="Check my LinkedIn"
            />
          </a>
          <a href="mailto:abdoulazizouldebe@esp.sn">
            <GoMail style={{color: '#afb5bc'}} title="send me an email" />
          </a>
        </div>

        {/* <Container sx={{alignSelf: 'center'}} className="mt-3 mb-5">
          <Form onSubmit={handleSubmit} className="d-flex flex-column">
            <Row className="mb-3 mt-3">
              <Col>envoyer moi un Email</Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  sx={{
                    width: isSmallScreen ? '100%' : '80%',
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#c778dd !important',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#cbced5 !important',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#c778dd !important',
                    },

                    '& .MuiInputBase-input': {
                      color: 'white',
                      caretColor: '#c778dd !important',
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <span
                          id="basic-addon1"
                          style={{
                            color: 'white',
                            fontSize: '18px',
                          }}
                        >
                          @
                        </span>
                      </InputAdornment>
                    ),
                    style: {
                      color: 'white',
                      fontSize: '18px',
                    },
                  }}
                  value={email}
                  onChange={(text) => setEmail(text.target.value)}
                  InputLabelProps={{
                    style: {color: 'white'},
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Message"
                  multiline
                  maxRows={6}
                  InputProps={{
                    style: {
                      color: 'white',
                      fontSize: '18px',
                    },
                  }}
                  value={message}
                  onChange={(text) => setMessage(text.target.value)}
                  InputLabelProps={{
                    style: {color: 'white'},
                  }}
                  sx={{
                    width: isSmallScreen ? '100%' : '80%',
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#c778dd !important',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#cbced5  !important',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#c778dd !important',
                    },

                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
              </Col>
            </Row>
            <button type="submit" className=" bouton">
              Contacter moi !
            </button>
          </Form>
        </Container> */}
      </Paper>
    </div>
  );
}

export default Contact;
