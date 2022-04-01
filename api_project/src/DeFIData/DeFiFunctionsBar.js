import React from 'react';
import { Switch } from '@mui/material';
import { Box, Typography, Pagination, Stack } from '@mui/material';

export default function DeFiFunctionsBar(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        m: '10px',
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '15px',
      }}
    >
      <Box>
        <Stack>
          <Pagination
            count={3}
            page={props.page}
            onChange={props.handlePagination}
          />
        </Stack>
      </Box>
      <Box sx={{ display: 'flex', textAlign: 'center', mr: 'auto' }}>
        <Switch
          label="Show 7-day graph"
          checked={props.graph}
          onChange={props.handleGraph}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            color={props.graph ? 'green' : 'gray'}
            variant="subtitle2"
          >
            Graph Switch
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
