import React, { useContext } from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import { Box, Typography } from '@mui/material';
import { CoinDataContext } from 'CEXData/provider.js';

export default function CoinPrice() {
  const { coinList, showGraph } = useContext(CoinDataContext);

  return (
    <Box sx={{ display: 'inline-block' }}>
      {coinList.map((coin) => (
        <Box
          key={coin.id}
          sx={{
            borderBottom: '2px solid #2f6a6a',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ display: 'inline-block', mr: '25px' }}>
            <Box sx={{ padding: '5px', display: 'flex' }}>
              <Box sx={{ mr: '5px' }}>
                <img className="coin-image" src={coin.image} alt={coin.id} />
              </Box>
              <Box sx={{ width: '150px' }}>
                <Typography color="white" variant="subtitle2">
                  {coin.name}:
                </Typography>
              </Box>
              <Box sx={{ width: '100px' }}>
                <Typography color="white" variant="subtitle2">
                  {coin.current_price.toLocaleString('en-US', {
                    maximumFractionDigits: 10,
                  })}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', padding: '5px' }}>
              <Box sx={{ mr: '20px', width: '150px' }}>
                <Typography
                  color="#00d35d"
                  variant="subtitle2"
                  sx={{ mr: '10px' }}
                >
                  ATH:
                </Typography>
                <Typography color="gold" variant="subtitle2">
                  $ {coin.ath}
                </Typography>
              </Box>
              <Box>
                <Typography color="#d18f47" variant="subtitle2">
                  ATL:
                </Typography>
                <Typography color="#d90c41" variant="subtitle2">
                  $ {coin.atl}
                </Typography>
              </Box>
            </Box>
          </Box>
          {showGraph && (
            <Box
              sx={{
                display: 'flex',
                width: '500px',
                height: '100px',
                mr: '25px',
              }}
            >
              <Sparklines data={coin.sparkline_in_7d.price} width={500}>
                <SparklinesBars
                  style={{
                    stroke: 'white',
                    fill: '#41c3f9',
                    fillOpacity: '.25',
                  }}
                />
                <SparklinesLine style={{ stroke: '#41c3f9', fill: 'none' }} />
              </Sparklines>
            </Box>
          )}
          <Box sx={{ width: '175px', textAlign: 'center' }}>
            <Typography color="white" variant="subtitle2">
              <u>Market Cap</u>
            </Typography>
            <Typography color="white" variant="subtitle2" sx={{ mb: '5px' }}>
              {coin.market_cap.toLocaleString('en-US', {
                maximumFractionDigits: 10,
              })}
            </Typography>
            <Typography color="white" variant="subtitle2">
              <u>24hr Volume</u>
            </Typography>
            <Typography color="white" variant="subtitle2">
              {coin.total_volume.toLocaleString('en-US', {
                maximumFractionDigits: 10,
              })}
            </Typography>
          </Box>
          <Box sx={{ width: '175px', textAlign: 'center' }}>
            <Typography color="white" variant="subtitle2">
              <u>24HR Price</u>
            </Typography>
            <Typography
              color={coin.price_change_24h > 0 ? 'green' : 'red'}
              variant="subtitle2"
              sx={{ mb: '5px' }}
            >
              {coin.price_change_24h.toLocaleString('en-US', {
                maximumFractionDigits: 10,
              })}
            </Typography>
            <Typography color="white" variant="subtitle2">
              <u>24HR Percent</u>
            </Typography>
            <Typography
              color={coin.price_change_percentage_24h > 0 ? 'green' : 'red'}
              variant="subtitle2"
            >
              {coin.price_change_percentage_24h.toLocaleString('en-US', {
                maximumFractionDigits: 10,
              })}
              %
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
