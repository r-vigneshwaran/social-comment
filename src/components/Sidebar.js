import React, { useState } from 'react';

const Sidebar = ({ scrolled = true, active, setActive }) => {
  const [selected, setSelected] = useState(1);
  const data = [
    { id: 1, item: 'Home', icon: <i class="bx bxs-home"></i> },
    { id: 2, item: 'Graph', icon: <i class="bx bxs-bar-chart-square"></i> },
    { id: 3, item: 'Tools', icon: <i class="bx bxs-briefcase"></i> },
    { id: 4, item: 'Resumes', icon: <i class="bx bxs-folder"></i> },
    {
      id: 5,
      item: 'Appointment Date',
      icon: <i class="bx bx-calendar-check"></i>
    },
    { id: 6, item: 'Users', icon: <i class="bx bxs-user"></i> },
    { id: 7, item: 'Message', icon: <i class="bx bx-message-detail"></i> },
    { id: 8, item: 'Log out', icon: <i class="bx bx-log-in"></i> }
  ];

  return (
    <div className={scrolled ? `sidebar ${active ? 'open' : ''}` : 'd-none'}>
      <div className="logo_content">
        <i class="bx bxl-dropbox" onClick={() => setActive(!active)}></i>
      </div>
      <ul className="nav_list">
        {data.map(({ id, item, icon }) => (
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
