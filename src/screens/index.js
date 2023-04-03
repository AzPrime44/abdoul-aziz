import React, {useState} from 'react';
import '../asserts/style/index.css';
import '../asserts/style/bootstrap.css';
import Home from './home';
import Nav from '../component/Nav';
import Footer from '../component/footer';
import Projets from './Projets';
import About from './About';
import Contact from './Contact';
export default function Index() {
  const [selected, setSelected] = useState(0);

  let content = null;
  switch (selected) {
    case 0:
      content = <Home setSelected={setSelected} />;
      break;
    case 1:
      content = <Projets />;
      break;
    case 2:
      content = <About setSelected={setSelected} />;
      break;
    case 3:
      content = <Contact />;
      break;
    default:
      break;
  }

  return (
    <div className="monContainer">
      <div className="center">
        <Nav selected={selected} setSelected={setSelected} />
        <div className="contenu">{content}</div>
        <Footer />
      </div>
    </div>
  );
}
