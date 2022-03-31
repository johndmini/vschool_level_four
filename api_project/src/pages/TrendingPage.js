import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { CoinDataContext } from 'CEXData/provider.js';

export default function Trending() {
  const { trending } = useContext(CoinDataContext);

  return (
    <Box sx={{ m: '15px' }}>
      {trending.coins.map((coin) => (
        <Box key={coin.item.id}>
          <Box sx={{ mb: '10px' }}>
            <Box>
              <img src={coin.item.small} alt={coin.item.id} />
            </Box>
            <Box>
              <Typography color="white">{coin.item.name}</Typography>
            </Box>
            <Box>
              <Typography color="white">
                ${' '}
                {Number(coin.item.price_btc).toLocaleString('en-US', {
                  maximumFractionDigits: 10,
                })}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
