import React, { useEffect, useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box } from '@mui/system';
import { CircularProgress, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Card = ({ secondary, color }) => {
  const [progress, setProgress] = useState(70);
  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ color: '#fff' }} position="relative" display="inline-flex">
        <CircularProgress
          color="primary"
          variant="determinate"
          size={100}
          {...props}
          sx={{ color: color }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            color="#fff"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div className={secondary ? 'border-dotted' : ''}>
      <Box
        sx={{
          bgcolor: secondary ? '#2e9bfe' : 'transparent',
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minWidth: 300,
          width: 350,
          border: 1,
          borderColor: 'rgb(82, 82, 82)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#fff',
          height: 150,
          transform: secondary ? 'translate(10px, 10px);' : 'none'
        }}
      >
        <Box>
          <Box sx={{ color: 'text.secondary', marginBottom: 1 }}>
            Total Applications
          </Box>
          <Box
            sx={{
              color: 'text.primary',
              fontSize: 34,
              fontWeight: 'medium',
              marginBottom: 1
            }}
          >
            7956
          </Box>
          <TrendingUpIcon
            sx={{
              color: secondary ? 'white' : 'success.dark',
              fontSize: 16,
              verticalAlign: 'sub'
            }}
          />
          <Box
            sx={{
              color: 'success.dark',
              display: 'inline',
              fontWeight: 'medium',
              mx: 0.5
            }}
          >
            18.77%
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          <MoreHorizIcon
            sx={{ color: 'white', fontSize: 16, verticalAlign: 'sub' }}
          />
          <CircularProgressWithLabel value={progress} />
        </Box>
      </Box>
    </div>
  );
};

export default Card;
