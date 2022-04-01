import React, { useState, useContext } from 'react';
import { ButtonGroup, Button, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { CoinDataContext } from '../CEXData/provider';

export default function Nav() {
  const [searchInput, setSearchInput] = useState('');
  const { searchTokens } = useContext(CoinDataContext);

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
      <ButtonGroup variant="contained" sx={{ mr: 'auto' }}>
        <Button component={Link} to="/">
          Coins
        </Button>
        <Button component={Link} to="/DeFiData">
          DeFi Tokens
        </Button>
        <Button component={Link} to="/Trending">
          Trending Coins
        </Button>
      </ButtonGroup>
      <Box>
        <TextField
          sx={{
            mr: '5px',
          }}
          size="small"
          id="filled-search"
          label="Search Tokens"
          type="search"
          varian="outlined"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          disabled={!searchInput}
          component={Link}
          to="/SearchedToken"
          variant="contained"
          onClick={() => searchTokens(searchInput)}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}
