import React from 'react';
import {Paper} from '@mui/material';
import '../asserts/style/style.css';
export default function ({setSelected}) {
  return (
    <div className="mt-4 align-self-center">
      <div className="p_top d-flex flex-column align-items-start">
        <div
          style={{
            color: '#C778DD',
            fontSize: 19,
            display: 'flex',
          }}
        >
          /<span className="spantext">Contacter moi </span>
          ────────
        </div>
      </div>
      <div className="paper_about mt-3 align-self-center">
        <Paper
          elevation={6}
          sx={{
            paddingBottom: '20px',
            backgroundColor: '#282c33',
            color: 'white',
            fontFamily: `'Fira Code', cursive`,
            alignSelf: 'center',
          }}
        >
          <div className="pt-4">
            Bonjour et bienvenue sur mon portfolio !
            <br />
            Je suis
            <span style={{fontSize: 18}}> Abdoul Aziz .</span>
            <br />
            Je suis un passionné d'informatique et de la programmation,
            titulaire d'une licence en mathématiques, physique et informatique.
            Actuellement, je suis en formation pour obtenir mon diplôme
            d'ingénieur de conception à{' '}
            <a
              style={{color: '#C778DD'}}
              href="https://esp.sn"
              className="mr-1 text-decoration-none"
            >
              l'ESP
            </a>
            . J'ai une grande passion pour la conception et le design, et j'aime
            créer des solutions innovantes et élégantes pour répondre aux
            besoins des utilisateurs. J'ai une solide expérience en
            programmation, ce qui me permet de transformer des idées en
            applications fonctionnelles et efficaces. Je suis constamment à la
            recherche de nouvelles technologies et de nouveaux défis pour
            améliorer mes compétences .N'hésitez pas à me
            <button
              className="monBtn ml-2"
              onClick={() => setSelected(3)}
              style={{color: '#C778DD'}}
            >
              contacter
            </button>
            si vous avez des questions ou si vous souhaitez discuter d'une
            opportunité professionnelle.
          </div>
        </Paper>
      </div>
    </div>
  );
}
