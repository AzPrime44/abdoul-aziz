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
          description="met l'accent sur les centres d'intérêt des utilisateurs. Avec Exchange, les utilisateurs peuvent échanger des connaissances, des expériences et des opinions sur des sujets qui les passionnent.
          "
          taille={400}
        />
        <MaCard title="Simulator" techno={['Java']} />
      </div>
    </div>
  );
}
