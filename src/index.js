import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Hard coded data for now
var data = [
    { "year": 2016, "price": 2238.83 },
    { "year": 2015, "price": 2043.94 },
    { "year": 2014, "price": 2058.90 },
    { "year": 2013, "price": 1848.36 },
    { "year": 2012, "price": 1426.19 },
    { "year": 2011, "price": 1257.60 },
    { "year": 2010, "price": 1257.64 },
    { "year": 2009, "price": 1115.10 },
    { "year": 2008, "price": 903.25 },
    { "year": 2007, "price": 1468.36 },
    { "year": 2006, "price": 1418.30 },
    { "year": 2005, "price": 1248.29 },
    { "year": 2004, "price": 1211.92 },
    { "year": 2003, "price": 1111.92 },
    { "year": 2002, "price": 879.82 },
    { "year": 2001, "price": 1148.08 },
    { "year": 2000, "price": 1320.28 },
    { "year": 1999, "price": 1469.25 },
    { "year": 1998, "price": 1229.23 },
    { "year": 1997, "price": 970.43 },
    { "year": 1996, "price": 740.74 }
];

// Render the main application node
ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
