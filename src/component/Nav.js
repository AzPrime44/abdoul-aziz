import React from 'react';
import Avatar from '@mui/material/Avatar';
import az from '../asserts/image/myEmoji.png';
import NavMui from '../component/NavMui';
export default function Nav({selected, setSelected}) {
  const items = ['home', 'works', 'about-me', 'contacts'];
  React.useEffect(() => {}, [selected]);
  return (
    <div>
      <div className=" fixed-top maNav ">
        <div className="logo">
          <Avatar alt="Abdoul Aziz's picture" src={az} style={{padding: 0}} />
        </div>
        <div className="menu mr-3">
          {items.map((item, index) => (
            <button
              key={index}
              className={selected === index ? 'active monBtn' : 'monBtn'}
              onClick={() => setSelected(index)}
            >
              <span style={{color: '#C778DD'}}>#</span>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="navmui">
        <NavMui selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}
