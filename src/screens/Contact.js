import '../asserts/style/style.css';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {GoMail} from 'react-icons/go';
import {Paper} from '@mui/material';
function Contact() {
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
          message en m'écrivant directement sur e-mail ou LinkedIn. Je serais
          ravi de répondre à vos questions et de discuter de toute opportunité
          de collaboration.
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
      </Paper>
    </div>
  );
}

export default Contact;
