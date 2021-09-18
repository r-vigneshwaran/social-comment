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
import { data, data01, COLORS, linearData } from 'data';
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
import { styled } from '@mui/system';
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
  const LinearProgession = ({ label, value, className }) => {
    return (
      <div className="flex-row center">
        <div className={`round-dot ${className}`}>
          <small>{label}</small>
        </div>
        <BorderLinearProgress
          variant="determinate"
          className={className}
          value={value}
        />
      </div>
    );
  };
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'center'}
        dominantBaseline="central"
        position="inside"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
              {linearData.map(({ id, label, value, className }) => (
                <LinearProgession
                  key={id}
                  label={label}
                  value={value}
                  className={className}
                />
              ))}
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
            <div className="flex-column justify-content-between align-start stats doughnut">
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
                  label={renderCustomizedLabel}
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
