import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

var data = [
    { "2016": 2275.12 },
    { "2015": 1918.60 },
    { "2014": 2028.18 }/*,
    { "year": 2013, "price": 1822.36 },
    { "year": 2012, "price": 1480.40 },
    { "year": 2011, "price": 1300.58 },
    { "year": 2010, "price": 1282.62 },
    { "year": 2009, "price": 1123.58 },
    { "year": 2008, "price": 865.58 },
    { "year": 2007, "price": 1378.76 },
    { "year": 2006, "price": 1424.16 },
    { "year": 2005, "price": 1278.73 },
    { "year": 2004, "price": 1181.41 },
    { "year": 2003, "price": 1132.52 },
    { "year": 2002, "price": 895.84 },
    { "year": 2001, "price": 1140.21 },
    { "year": 2000, "price": 1335.63 },
    { "year": 1999, "price": 1425.59 },
    { "year": 1998, "price": 1248.77 },
    { "year": 1997, "price": 963.36 },
    { "year": 1996, "price": 766.22 }*/
];

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
