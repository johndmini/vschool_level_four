import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import { CoinDataContext } from './provider';
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Pagination,
  Stack,
} from '@mui/material';

export default function FunctionsBar() {
  const {
    handleGraph,
    showGraph,
    listPage,
    handlePagination,
    handleAmountShown,
    amountShown,
  } = useContext(CoinDataContext);

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
            count={13500 / amountShown}
            page={listPage}
            onChange={handlePagination}
          />
        </Stack>
      </Box>
      <Box>
        <FormControl
          sx={{
            width: '80px',
          }}
        >
          <InputLabel id="pagination">List/Page</InputLabel>
          <Select
            size="small"
            labelId="pagination"
            id="pagination"
            value={amountShown}
            label="List/Page"
            onChange={handleAmountShown}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', textAlign: 'center', mr: 'auto' }}>
        <Switch
          label="Show 7-day graph"
          checked={showGraph}
          onChange={handleGraph}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography color={showGraph ? 'green' : 'gray'} variant="subtitle2">
            Graph Switch
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
