import React from 'react';
import BG from 'assets/images/cartoon.jpeg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const RightNav = ({ rightNav, handleClickAdd }) => {
  const Applicants = () => {
    return (
      <div className="applicant">
        <AccountCircleOutlinedIcon
          sx={{
            color: '#fff',
            fontSize: 30
          }}
        />
        <div className="name">
          <p>Rossie Mette</p>
          <small>
            applied for <span className="text-secondary">ios developer</span>{' '}
          </small>
        </div>
        <span className="icon">
          <CallIcon
            sx={{
              color: '#fff',
              fontSize: 16,
              verticalAlign: 'sub'
            }}
          />
        </span>
        <span className="icon">
          <EmailIcon
            sx={{
              color: '#fff',
              fontSize: 16,
              verticalAlign: 'sub'
            }}
          />
        </span>
      </div>
    );
  };
  return (
    <div className={`right-nav ${rightNav ? 'active' : ''}`}>
      <span
        onClick={handleClickAdd}
        className={`right-icon ${rightNav ? '' : 'closed'}`}
      >
        <i class="bx bx-right-arrow-alt"></i>
      </span>
      <div className="right-nav-img">
        <img src={BG} alt="" />
      </div>
      <div className="applicants">
        <div className="title">
          <h3>New Applicants</h3>
          <ChevronRightIcon />
        </div>
        <div className="position-absolute px-5">
          <Applicants />
          <Applicants />
          <Applicants />
          <Applicants />
          <Applicants />
          <Applicants />
          <Applicants />
          <Applicants />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
