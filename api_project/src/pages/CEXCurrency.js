import React from 'react';
import FunctionsBar from '../CEXData/FunctionsBar';
import CoinPrice from '../CEXData/CoinPrice';
import { CoinDataProvider } from '../CEXData/provider';
import { Box } from '@mui/material';

export default function CEXCurrency() {
  return (
    <CoinDataProvider>
      <Box>
        <Box>
          <FunctionsBar />
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <CoinPrice />
        </Box>
      </Box>
    </CoinDataProvider>
  );
}
