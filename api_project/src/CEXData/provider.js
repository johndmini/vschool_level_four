import React, { useState, useEffect } from 'react';
const baseUrl = 'https://api.coingecko.com/api/v3/'
const CoinDataContext = React.createContext();
const axios = require('axios');

const CoinDataProvider = (props) => {
  const [coinList, setCoinList] = useState([]);
  const [listPage, setListPage] = useState(1);
  const [hourPrice, setHourPrice] = useState('1h');
  const [amountShown, setAmountShown] = useState(10);
  const [showGraph, setShowGraph] = useState(true);
  const [searchResults, setSearchResults] = useState({});
  const [targetToken, setTargetToken] = useState({});
  const [trending, setTrending] = useState({});
  const { coins } = searchResults;

  const getData = () => {
    axios
      .get(
        `${baseUrl}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${amountShown}&page=${listPage}&sparkline=${showGraph}&price_change_percentage=${hourPrice}`
      )
      .then((res) => setCoinList(res.data));
  };
  const searchTokens = (input) => {
    axios
      .get(`${baseUrl}search?query=${input}`)
      .then((res) => setSearchResults(res.data));
  };

  const handleTokenRender = (id) => {
    axios
      .get(
        `${baseUrl}coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
      )
      .then((res) => setTargetToken(res.data));
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/search/trending`)
      .then((res) => setTrending(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `${baseUrl}coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
      )
      .then((res) => setTargetToken(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}search?query=btc`)
      .then((res) => setSearchResults(res.data));
  }, []);

  useEffect(() => {
    getData();
    const interval = setInterval(() => getData(), 60000);
    return () => {
      clearInterval(interval);
    };
  }, [amountShown, listPage]);

  const handlePagination = (e, value) => {
    setListPage(value);
  };

  const handleAmountShown = (e) => {
    setAmountShown(e.target.value);
  };

  const handlPriceTimeline = () => {
    setHourPrice();
  };

  const handleGraph = () => {
    setShowGraph((prevState) => !prevState);
  };

  return (
    <CoinDataContext.Provider
      value={{
        coins,
        coinList,
        amountShown,
        listPage,
        showGraph,
        targetToken,
        trending,
        searchTokens,
        handleGraph,
        handlePagination,
        handleAmountShown,
        handlPriceTimeline,
        setAmountShown,
        handleTokenRender,
      }}
    >
      {props.children}
    </CoinDataContext.Provider>
  );
};

export { CoinDataContext, CoinDataProvider };
