import React from 'react';
import {Paper} from '@mui/material';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="info">
          ───Abdoul Aziz───
          <span>
            Élève-ingénieur, titulaire d'une licence en Mathématiques et
            passionné d'informatique.
          </span>
        </div>
        <Paper
          elevation={3}
          sx={{backgroundColor: '#282c33'}}
          className="media"
        >
          <span className="media_text">Media</span>
          <div className="media_link">
            <a href="https://github.com/AzPrime44" target="_blank">
              <FaGithub style={{color: '#afb5bc'}} title="Check my Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdoul-aziz-ebe/"
              target="_blank"
            >
              <FaLinkedinIn
                style={{color: '#afb5bc'}}
                title="Check my LinkedIn"
              />
            </a>
          </div>
        </Paper>
      </div>
      <div className="text-center text-light mb-2">
        Copyright© 2023 Abdoul Aziz .Tous droits réservés
      </div>
    </div>
  );
}
