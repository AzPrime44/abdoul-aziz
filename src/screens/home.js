import React from 'react';
import '../asserts/style/home.css';
import MaCard from '../component/Card';
import Chart from '../component/chart';
import exchange from '../asserts/image/Exchange.PNG';
import kaddu from '../asserts/image/kaddu.png';
import {FaArrowCircleRight} from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';
import {Paper} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteRight, faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import '../asserts/style/bootstrap.css';
export default function Home({setSelected}) {
  const Separator = ({nom, pageNum}) => {
    return (
      <div className="separator">
        <div style={{color: '#C778DD'}}>
          #<span className="spantext">{nom} </span>
          ────────
        </div>
        {pageNum && (
          <div>
            <button className=" monBtn" onClick={() => setSelected(pageNum)}>
              View all
              <span aria-label="fingerprint" color="secondary" className="ml-3">
                <FaArrowCircleRight />
              </span>
            </button>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="homeContenu">
      <div className="header">
        <div className="h_left_left">
          <span className="text1">
            I am Abdoul,a web designer and front-end developer
          </span>
          <div className="text2">
            Un designer frontend créatif et passionné qui crée des expériences
            utilisateur exceptionnelle
          </div>
          <button
            type="button"
            className=" bouton"
            onClick={() => setSelected(3)}
          >
            Contacter moi !
          </button>
        </div>
        <div className="h_right">
          <div className="citation" id="citation">
            <FontAwesomeIcon
              size="3x"
              className="quoteLeft"
              icon={faQuoteLeft}
              style={{color: '#abb2bf'}}
            />
            <span className="c_text">
              Le design est la fonction, l'art est l'émotion,La fusion donne
              naissance à des créations
            </span>
            <span className="autor">━━ Abdoul Aziz━━━</span>
            <FontAwesomeIcon
              size="3x"
              className="quoteRight"
              style={{color: '#abb2bf'}}
              icon={faQuoteRight}
            />
          </div>
        </div>
      </div>
      <section className="contacts">
        <Separator nom="About me" pageNum={2} />
        <div className="paper">
          <Paper
            elevation={6}
            sx={{
              backgroundColor: '#282c33',
              color: 'white',
              fontFamily: `'Fira Code', cursive`,
            }}
          >
            Bonjour et bienvenue sur ma page professionnelle !
            <br />
            Je suis
            <span style={{fontSize: 18}}> Abdoul Aziz .</span>
            <br />
            je suis diplômé en Mathématiques, Physique et Informatique, et j'ai
            une passion pour le développement web. Avec une solide formation en
            mathématiques, j'ai acquis des compétences en résolution de
            problèmes complexes qui me sont très utiles dans le domaine de la
            programmation. J'ai également une expérience significative en
            développement web frontend et je suis capable de m'adapter
            rapidement à de nouvelles technologies et à des environnements de
            travail dynamiques. Actuellement, je suis en formation pour le
            diplôme d'Ingénieur de conception, ce qui me permet de renforcer mes
            compétences et d'élargir mon champ de connaissances. N'hésitez pas à
            me
            <button
              className="monBtn ml-2"
              onClick={() => setSelected(3)}
              style={{color: '#C778DD'}}
            >
              contacter
            </button>{' '}
            si vous avez des questions ou si vous souhaitez discuter d'une
            opportunité professionnelle.
          </Paper>
        </div>
      </section>
      <section className="projets">
        <Separator nom="Projects" pageNum={1} />

        <div className="cards">
          <MaCard
            img={kaddu}
            title="Kaddu"
            techno={['React']}
            setSelected={setSelected}
            redirect={true}
            description="Appli qui permet de communiquer, par commande vocale..."
          />
          <MaCard
            img={exchange}
            title="Exchange"
            setSelected={setSelected}
            techno={['React native', '  Python']}
            redirect={true}
            description="met l'accent sur les centres d'intérêt des utilisateurs..."
          />
          <MaCard
            title="Simulator"
            techno={['Java']}
            setSelected={setSelected}
            redirect={true}
            taille={200}
          />
        </div>
      </section>

      <section className="skills">
        <Separator nom="Skills" />
        <Chart />
      </section>
    </div>
  );
}

// ___________________________________
