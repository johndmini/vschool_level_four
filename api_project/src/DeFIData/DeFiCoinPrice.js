import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import { Box, Typography } from '@mui/material';

export default function DeFiPrice(props) {
  return (
    <Box
      sx={{
        borderBottom: '2px solid #2f6a6a',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'inline-block', mr: '25px' }}>
        <Box sx={{ padding: '5px', display: 'flex' }}>
          <Box sx={{ mr: '5px' }}>
            <img className="defi-image" src={props.image} alt={props.id} />
          </Box>
          <Box sx={{ width: '150px' }}>
            <Typography color="white" variant="subtitle2">
              {props.name}:
            </Typography>
          </Box>
          <Box sx={{ width: '100px' }}>
            {props.current_price !== null && (
              <Typography color="white" variant="subtitle2">
                ${' '}
                {props.current_price.toLocaleString('en-US', {
                  maximumFractionDigits: 10,
                })}
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', padding: '5px' }}>
          <Box sx={{ mr: '20px', width: '150px' }}>
            <Typography color="#00d35d" variant="subtitle2" sx={{ mr: '10px' }}>
              ATH:
            </Typography>
            <Typography color="gold" variant="subtitle2">
              $ {props.ath}
            </Typography>
          </Box>
          <Box>
            <Typography color="#d18f47" variant="subtitle2">
              ATL:
            </Typography>
            <Typography color="#d90c41" variant="subtitle2">
              $ {props.atl}
            </Typography>
          </Box>
        </Box>
      </Box>
      {props.graph && (
        <Box
          sx={{
            display: 'flex',
            width: '500px',
            height: '100px',
            mr: '25px',
          }}
        >
          <Sparklines data={props.sparkline_in_7d.price} width={500}>
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
        {props.market_cap !== null && (
          <Typography color="white" variant="subtitle2" sx={{ mb: '5px' }}>
            ${' '}
            {props.market_cap.toLocaleString('en-US', {
              maximumFractionDigits: 10,
            })}
          </Typography>
        )}
        <Typography color="white" variant="subtitle2">
          <u>24hr Volume</u>
        </Typography>
        {props.total_volume !== null && (
          <Typography color="white" variant="subtitle2">
            ${' '}
            {props.total_volume.toLocaleString('en-US', {
              maximumFractionDigits: 10,
            })}
          </Typography>
        )}
      </Box>
      <Box sx={{ width: '175px', textAlign: 'center' }}>
        <Typography color="white" variant="subtitle2">
          <u>24HR Price</u>
        </Typography>
        {props.price_change_24h !== null && (
          <Typography
            color={props.price_change_24h > 0 ? 'green' : 'red'}
            variant="subtitle2"
            sx={{ mb: '5px' }}
          >
            ${' '}
            {props.price_change_24h.toLocaleString('en-US', {
              maximumFractionDigits: 10,
            })}
          </Typography>
        )}
        <Typography color="white" variant="subtitle2">
          <u>24HR Percent</u>
        </Typography>
        {props.price_change_percentage_24h !== null && (
          <Typography
            color={props.price_change_percentage_24h > 0 ? 'green' : 'red'}
            variant="subtitle2"
          >
            {props.price_change_percentage_24h.toLocaleString('en-US', {
              maximumFractionDigits: 10,
            })}
            %
          </Typography>
        )}
      </Box>
    </Box>
  );
}
