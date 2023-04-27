import React from 'react';
import '../asserts/style/style.css';
import MaCard from '../component/Card';
import exchange from '../asserts/image/Exchange.PNG';
import kaddu from '../asserts/image/kaddu.png';
export default function Projets() {
  return (
    <div className="container mt-3">
      <div className="p_top d-flex flex-column align-items-start">
        <div
          style={{
            color: '#C778DD',
            fontSize: 19,
            marginRight: `20px`,
            display: 'flex',
          }}
        >
          /<span className="spantext">Projets </span>
          ────────
        </div>
        <text className="text2">liste de mes projets</text>
      </div>
      <div className="cards p_center mt-5">
        <MaCard
          img={kaddu}
          title="Kaddu"
          taille={390}
          repo="https://github.com/AzPrime44/frontendKaddou"
          techno={['React,', 'node Js']}
          description="Application qui permet aux utilisateurs de communiquer facilement et efficacement par messages écrits et/ou vocaux, par commande vocale."
        />
        <MaCard
          img={exchange}
          title="Exchange"
          techno={['React native,', '  Python']}
          key={2}
          description={
            <span>
              met l'accent sur les centres d'intérêt des utilisateurs. Avec
              Exchange, les utilisateurs peuvent échanger des connaissances, des
              expériences et des opinions sur des sujets qui les passionnent.
              <br />
              <span style={{color: 'gray'}}>The Ripo is private !</span>
            </span>
          }
          taille={400}
        />
        <MaCard
          repo="https://github.com/AzPrime44/simulation"
          taille={300}
          title="Simulator"
          techno={['Java , ', 'Python']}
          description="Application qui simule une transmission par fibre optique , admet une interface graphique user-friendly facile a utilisé ,grace au drap-and-drop on arrive a stimuler une transmission reseau et effectuer de nombreuses calcules"
        />
        <MaCard
          taille={400}
          title="Ecole Doctorale"
          techno={['Java EE , ', 'Spring boot']}
          description="Plateforme qui automatise la préinscription et l'inscription des doctorants de l'école doctorale de Mathématiques et d'informatiques."
        />
        <MaCard
          taille={400}
          title="Plaformate de Datavisualisation"
          techno={['LeaftleJS , ', 'Canvas , ', 'PHP ', 'Réseau']}
          description="Mise en place de la plateforme de datavisualisation en temps réel du premier hydrophone realise au sénégale"
        />
        <MaCard
          taille={400}
          title="Crack-the-code"
          techno={['Java ']}
          description="Mise en oeuvre d'un crackeur de mots de passe qui permet l'utilisation de la methode brute force ou la methode dictionnaire. projet conçu à des fins pedagogiques "
        />
      </div>
    </div>
  );
}
