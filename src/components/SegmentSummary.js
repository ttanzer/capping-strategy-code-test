import '../styles/SegmentSummary.css';

import React from 'react'

export const SegmentSummary = ({capPercent, startYear, endYear, data}) => {

  // Loop through each year to calculate the coordinates
  // ToDo: this should be modularized and reused for the graph rather than duplicated
  for (let year = startYear; year <= endYear; year++) {

    // Grab the price out of the data array
    var price = data.filter(entry => entry.year === year)[0].price;

    // Calculate the capped price
    var cappedPrice;

    // Get the previous year's price to see if it needs to be capped
    var previousPrice = year === startYear
      ? price
      : data.filter(entry => entry.year === year - 1)[0].price;

    var previousCapPrice = year == startYear
      ? price
      : data.filter(entry => entry.year === year - 1)[0].cappedPrice;

    var increasePercent = (price - previousPrice) / price;

    // Determine what the capped price should be
    if (increasePercent <= 0) {
      cappedPrice = previousCapPrice;
    } else if (increasePercent < capPercent * .01) {
      cappedPrice = previousCapPrice * (increasePercent + 1);
    } else {
      cappedPrice = previousCapPrice * (capPercent * .01 + 1);
    }

    // Add the capped price value to the data array for use in next year's calculation
    data.filter(entry => entry.year === year)[0].cappedPrice = cappedPrice;
  }

  const segments = [];

  for (let year = startYear; year <= endYear; year++) {
    segments.push(data.filter(entry => entry.year === year)[0]);
  }

  return (
    <div className="segment-summary">
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>
              Period
            </th>
            <th>
              S&amp;P Price
            </th>
            <th>
              Capped Price
            </th>
            <th>
              Winner
            </th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment, i) => 
            <tr>
              <td>{segment.year}</td>
              <td>{segment.price}</td>
              <td>{parseFloat(Math.round(segment.cappedPrice * 100) / 100).toFixed(2)}</td>
              <td>{segment.price === segment.cappedPrice ? "Tie" : segment.price > segment.cappedPrice ? "S&P" : "Capped"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

};