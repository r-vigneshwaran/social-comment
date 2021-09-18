import { sidebarData } from 'data';
import React, { useState } from 'react';

const Sidebar = ({ scrolled = true, active, setActive }) => {
  const [selected, setSelected] = useState(1);

  return (
    <div className={scrolled ? `sidebar ${active ? 'open' : ''}` : 'd-none'}>
      <div className="logo_content">
        <i class="bx bxl-dropbox" onClick={() => setActive(!active)}></i>
      </div>
      <ul className="nav_list">
        {sidebarData.map(({ id, item, icon }) => (
          <li
            onClick={() => setSelected(id)}
            className={!active && selected === id ? 'selected' : ''}
            key={id}
          >
            <span
              alt="icon"
              className={`icon ${selected === id ? 'selected' : ''} ${
                !active ? 'active ' : ''
              }`}
            >
              {icon}
              <span className={selected === id ? 'selected' : ''}>{item}</span>
              {!active && <span className="tool-tip">{item}</span>}
            </span>
          </li>
        ))}
        <li
          onClick={() => setSelected(9)}
          className={!active && selected === 9 ? 'selected setting' : 'setting'}
        >
          <span
            alt="icon"
            className={`icon ${selected === 9 ? 'selected' : ''} ${
              !active ? 'active ' : ''
            }`}
          >
            <i class="bx bxl-react"></i>
            <span>settings</span>
            {!active && <span className="tool-tip">settings</span>}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
