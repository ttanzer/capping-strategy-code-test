import '../styles/BalanceGraph.css';

import React from 'react'

// A dumb component (without state) to display the graph
export const BalanceGraph = ({capPercent, startYear, endYear, data}) => {

    // Create empty arrays to hold the graph points
    var spPoints = [];
    var capPoints = [];
    var previousSpPoint = null;
    var previousCapPoint = null;

    // Loop through each year to calculate the coordinates
    for (let year = startYear; year <= endYear; year++) {

        // Grab the price out of the data array
        var price = data.filter(entry => entry.year === year)[0].price;

        // Calculate the x value based on the year
        var x = (year - startYear) * (1000 / (endYear - startYear));

        // Calculate the y value based on the price for the data array
        var y = 600 - (price / 4);

        // Push the point to the S&P values array
        spPoints.push({x, y});

        // Calculate the capped price
        var cappedPrice;

        // Get the previous year's price to see if it needs to be capped
        var previousPrice = year === startYear
            ? price
            : data.filter(entry => entry.year === year - 1)[0].cappedPrice;
        var increasePercent = (price - previousPrice) / price;

        // Determine what the capped price should be
        if (increasePercent <= 0) {
            cappedPrice = previousPrice;
        } else if (increasePercent < capPercent * .01) {
            cappedPrice = price;
        } else {
            cappedPrice = previousPrice * (capPercent * .01 + 1);
        }

        // Calculate the y for the capped price (the x will be the same as the uncapped)
        y = 600 - (cappedPrice / 4);

        // Push the point to the capped values array
        capPoints.push({x, y});

        // Add the capped price value to the data array for use in next year's calculation
        data.filter(entry => entry.year === year)[0].cappedPrice = cappedPrice;
    }

    // Draw a line for the S&P price
    var drawSPLine = (point, index) => {
        if (!previousSpPoint) 
            previousSpPoint = point;
        const line = (<line
            key={index}
            x1={previousSpPoint.x}
            y1={previousSpPoint.y}
            x2={point.x}
            y2={point.y}
            stroke="#0365c0"
            strokeWidth={4}/>);
        previousSpPoint = point;
        return line;
    };

    // Draw a line for the capped product price
    var drawCapLine = (point, index) => {
        if (!previousCapPoint) 
            previousCapPoint = point;
        const line = (<line
            key={index}
            x1={previousCapPoint.x}
            y1={previousCapPoint.y}
            x2={point.x}
            y2={point.y}
            stroke="#00882b"
            strokeWidth={4}/>);
        previousCapPoint = point;
        return line;
    };

    // Draw the vertical grid lines for each year in the graph
    var drawYearLines = (point, index) => {
        return (<line
            key={'y' + index}
            y1={0}
            y2={500}
            x1={point.x}
            x2={point.x}
            stroke="#cccccc"
            strokeWidth={1}/>);
    };

    // Draw the graph using straigh svg
    return (
        <div className="graph-wrapper">
            <h3 className="slider-label">Balance</h3>
            <svg
                viewBox={'0 0 1000 500'}
                style={{
                marginLeft: 90,
                marginTop: -40
            }}>
                {[500, 1000, 1500, 2000, 2500].map((price, i) => <line
                    key={'p' + price}
                    x1={0}
                    y1={600 - (price / 4)}
                    x2={1000}
                    y2={600 - (price / 4)}
                    stroke="#cccccc"
                    strokeWidth={1}/>)}
                {spPoints.map((point, i) => drawYearLines(point, i))}
                {spPoints.map((point, i) => drawSPLine(point, i))}
                {capPoints.map((point, i) => drawCapLine(point, i))}
            </svg>
        </div>
    );

};