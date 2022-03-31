import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CoinDataContext } from '../CEXData/provider';
import { Link } from 'react-router-dom';

export default function SearchedToken() {
  const { coins, handleTokenRender } = useContext(CoinDataContext);

  return (
    <Box>
      <Box sx={{ m: '10px' }}>
        <Box sx={{ mb: '10px' }}>
          <Typography variant="h6" color="white">
            <u>Search Results: Found {coins.length} results</u>
          </Typography>
        </Box>
        {coins.map((coin) => (
          <Box key={coin.id} sx={{ display: 'flex' }}>
            <Box sx={{ mr: '5px' }}>
              <img src={coin.thumb} alt={coin.thumb} />
            </Box>
            <Box>
              <Button
                component={Link}
                to="/TargetToken"
                sx={{ color: 'white' }}
                onClick={() => handleTokenRender(coin.id)}
              >
                {coin.name}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
