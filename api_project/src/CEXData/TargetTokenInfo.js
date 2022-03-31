import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { CoinDataContext } from './provider.js';

export default function TargetToken() {
  const { targetToken } = useContext(CoinDataContext);

  return (
    <Box sx={{ m: '10px' }}>
      {Object.keys(targetToken).map((token) => (
        <Box key={token.id}>
          <Box>
            <Typography color="white" variant="subtitle2">
              {token} :{' '}
              {typeof targetToken[token] === 'string'
                ? targetToken[token]
                : 'N/A'}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
