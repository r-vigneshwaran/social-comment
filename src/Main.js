import Card from 'components/Card';
import React, { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Typography } from '@mui/material';
import RightNav from 'components/RightNav';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import TelegramIcon from '@mui/icons-material/Telegram';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  ComposedChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Line,
  PieChart,
  Pie,
  Label,
  Cell,
  Tooltip
} from 'recharts';
import { Box, styled } from '@mui/system';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';

const Main = ({ active }) => {
  const [rightNav, setRightNav] = useState(true);
  const handleClickAdd = () => {
    setRightNav(!rightNav);
  };
  useEffect(() => {
    if (window.screen.width < 700) {
      setRightNav(false);
    }
  }, []);
  const data = [
    {
      name: 'jan',
      uv: 57,
      pv: 30,
      amt: 1400
    },
    {
      name: 'feb',
      uv: 42,
      pv: 57,
      amt: 1506
    },
    {
      name: 'mar',
      uv: 57,
      pv: 40,
      amt: 989
    },
    {
      name: 'apr',
      uv: 60,
      pv: 43,
      amt: 1228
    },
    {
      name: 'may',
      uv: 42,
      pv: 80,
      amt: 1100
    },
    {
      name: 'jun',
      uv: 60,
      pv: 78,
      amt: 1700
    },
    {
      name: 'jul',
      uv: 50,
      pv: 40,
      amt: 1700
    }
  ];
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
    }
  }));
  const COLORS = ['#6543b4', '#4b91ff', '#fe5260'];

  const data01 = [
    { name: 'Group A', value: 45 },
    { name: 'Group B', value: 25 },
    { name: 'Group C', value: 30 }
  ];
  return (
    <div className={`main-content-area ${active ? 'open' : ''}`}>
      <Navbar handleClickAdd={handleClickAdd} />
      <CssBaseline />
      <div className="main-container">
        <Grid container spacing={3} p={1}>
          <Grid item>
            {' '}
            <Card color="#6543b4" />
          </Grid>
          <Grid item>
            {' '}
            <Card secondary={true} color="#fff" />
          </Grid>
          <Grid item>
            {' '}
            <Card color="#fe5260" />
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={8} style={{ height: '300px' }}>
            {' '}
            <div className="d-flex flex-row justify-content-between white center">
              <div className="application">Application</div>
              <div className="flex-row center">
                <Typography variant="caption">This Year</Typography>
                <Typography variant="caption">This Week</Typography>
                <Typography variant="caption">Today</Typography>
                <Typography variant="caption" className="center">
                  <DriveFileMoveIcon sx={{ color: '#fff', marginRight: 1 }} />{' '}
                  Download Report
                </Typography>
                <Typography>
                  <MoreHorizIcon />
                </Typography>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={900}
                data={data}
                margin={{
                  top: 20,
                  right: 0,
                  bottom: 20,
                  left: 0
                }}
              >
                <CartesianGrid
                  strokeDasharray="0 0 0"
                  vertical={false}
                  stroke="#383a44"
                />
                <XAxis
                  axisLine={false}
                  dataKey="name"
                  label={{
                    position: 'insideBottomRight',
                    offset: 0
                  }}
                  scale="band"
                />
                <YAxis
                  axisLine={false}
                  label={{ angle: -90, position: 'insideLeft' }}
                  domain={[0, 100]}
                />
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e84646" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#e84646" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c97979" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#c97979" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#e84646"
                  fillOpacity={1}
                  strokeWidth={3}
                  fill="url(#colorUv)"
                />
                <Line type="monotone" dataKey="uv" stroke="#383a44" />
              </ComposedChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={4} className="linear">
            <p>Total Applications</p>
            <div className="linear-progress">
              <div className="flex-row center">
                <div className="round-dot app">
                  <small>Applications</small>
                </div>
                <BorderLinearProgress
                  variant="determinate"
                  className="app"
                  value={40}
                />
              </div>
              <div className="flex-row center">
                <div className="round-dot short">
                  <small>Short Listed</small>
                </div>
                <BorderLinearProgress variant="determinate" value={70} />
              </div>
              <div className="flex-row center">
                <div className="round-dot rej">
                  <small>Rejected</small>
                </div>
                <BorderLinearProgress
                  className="rej"
                  variant="determinate"
                  value={47}
                />
              </div>
              <div className="flex-row center">
                <div className="round-dot hold">
                  <small>On Hold</small>
                </div>
                <BorderLinearProgress
                  className="hold"
                  variant="determinate"
                  value={20}
                />
              </div>
              <div className="flex-row center">
                <div className="round-dot pay">
                  <small>Payload</small>
                </div>
                <BorderLinearProgress
                  className="pay"
                  variant="determinate"
                  value={80}
                />
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={8}
            style={{ height: '300px', color: '#fff' }}
            className="statistics"
          >
            <div className="flex-column justify-content-between stats">
              <div className="flex-column">
                <div className="flex-column title">
                  <small>Referals and Compaign Stats</small>
                </div>
                <div className="flex-row box">
                  <div className="flex-1">
                    <Typography>User's Reached</Typography>
                    <div className="flex-row">
                      <TrendingUpIcon />
                      <Typography>+3.59%</Typography>
                    </div>
                    <h3>7956</h3>
                  </div>
                  <div className="flex-1">
                    <Typography>User's Reached</Typography>
                    <div className="flex-row">
                      <TrendingUpIcon />
                      <Typography>+3.59%</Typography>
                    </div>
                    <h3>7956</h3>
                  </div>
                </div>
                <div className="btn-primary">
                  <div className="flex-column">
                    <small>Start new compaign now</small>
                  </div>
                </div>
              </div>
              <div className="flex-column flex-end">
                <div className="flex-row align-center title">
                  <TelegramIcon className="text-danger " />
                  <div className="flex-column me-1">
                    <small className="text-danger mb-1">
                      Referals and Compaign Stats
                    </small>
                    <small>Referals and Compaign Stats</small>
                  </div>
                </div>
                <div className="flex-row box">
                  <div className="flex-1">
                    <Typography>User's Reached</Typography>
                    <div className="flex-row">
                      <TrendingUpIcon />
                      <Typography>+3.59%</Typography>
                    </div>
                    <h3>7956</h3>
                  </div>
                  <div className="flex-1">
                    <Typography>User's Reached</Typography>
                    <div className="flex-row">
                      <TrendingUpIcon />
                      <Typography>+3.59%</Typography>
                    </div>
                    <h3>7956</h3>
                  </div>
                </div>
                <div className="btn-secondary">
                  <small>Start new compaign now</small>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={4}
            style={{ height: 'auto' }}
            className=""
          >
            <div className="flex-column justify-content-between stats doughnut">
              <div className="flex-row justify-content-between">
                <Typography>Open Position by Department</Typography>
              </div>
              <PieChart width={300} height={280}>
                <Pie
                  data={data01}
                  cx={150}
                  cy={150}
                  innerRadius={60}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={0}
                >
                  <Label
                    value="open"
                    position="centerBottom"
                    className="label-top"
                    fontSize="27px"
                  />
                  <Label
                    value="positions"
                    position="centerTop"
                    className="label"
                  />
                  {data01.map((entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </Grid>
        </Grid>
        <RightNav handleClickAdd={handleClickAdd} rightNav={rightNav} />
      </div>
    </div>
  );
};

export default Main;
