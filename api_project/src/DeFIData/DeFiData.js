import React, { useState, useEffect } from 'react';
import DeFiPrice from 'DeFIData/DeFiCoinPrice.js';
import DeFiFunctionsBar from 'DeFIData/DeFiFunctionsBar.js';
import { Box } from '@mui/material';

const axios = require('axios');
const baseUrl = 'https://api.coingecko.com/api/v3/';

export default function DefiData() {
  const [defiData, setDefiData] = useState([]);
  const [showDeFiGraph, setShowDeFiGraph] = useState(true);
  const [listPage, setListPage] = useState(1);
  const [perPage, setPerPage] = useState(50);
  const defiPerPage = defiData.slice(0, perPage);
  console.log(defiData);
  const handleDeFiGraph = () => {
    setShowDeFiGraph(!showDeFiGraph);
  };

  const handleDeFiPerPage = (e) => {
    setPerPage(e.target.value);
  };

  const handlePageNumber = (e, value) => {
    setListPage(value);
  };

  useEffect(() => {
    axios
      .get(
        `${baseUrl}coins/markets?vs_currency=usd&category=decentralized-exchange&order=market_cap_desc&per_page=100&page=${listPage}&sparkline=${showDeFiGraph}&price_change_percentage=24h`
      )
      .then((res) => setDefiData(res.data));
  }, [listPage]);

  const defiList = defiPerPage.map((defi) => (
    <DeFiPrice key={defi.id} {...defi} graph={showDeFiGraph} />
  ));

  return (
    <Box sx={{ m: '10px' }}>
      <Box >
        <DeFiFunctionsBar
          perPage={perPage}
          page={listPage}
          graph={showDeFiGraph}
          handlePagination={handlePageNumber}
          handlePerPage={handleDeFiPerPage}
          handleGraph={handleDeFiGraph}
        />
      </Box>
      <Box sx={{ display: 'inline-block' }}>
        {defiList}
      </Box>
    </Box>
  );
}
