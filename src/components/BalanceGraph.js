import '../styles/BalanceGraph.css';

import React from 'react'

export const BalanceGraph = ({capPercent, startYear, endYear, data}) => {

    const wrapperStyle = {
        marginLeft: 50,
        marginTop: 20,
        marginRight: 50,
        marginBottom: 20
    };

    var numberOfYears = endYear - startYear;

    var spPoints = [];
    var capPoints = [];
    var previousSpPoint = null;
    var previousCapPoint = null;

    for (let year = startYear; year <= endYear; year++) {
        var price = data.filter(entry => entry.year === year)[0].price;
        var x = (year - startYear) * (1000 / numberOfYears);
        var y = 600 - (price / 4);
        spPoints.push({x, y});

        var cappedPrice;
        var previousPrice = year === startYear
            ? price
            : data.filter(entry => entry.year === year - 1)[0].cappedPrice;
        var increasePercent = (price - previousPrice) / price;

        if (increasePercent <= 0) {
            cappedPrice = previousPrice;
        } else if (increasePercent < capPercent * .01) {
            cappedPrice = price;
        } else {
            cappedPrice = previousPrice * (capPercent * .01 + 1);
        }

        y = 600 - (cappedPrice / 4);

        capPoints.push({x, y});

        data.filter(entry => entry.year === year)[0].cappedPrice = cappedPrice;
    }

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

    var drawCapLine = (point, index) => {
        if (!previousCapPoint) 
            previousCapPoint = point;
        const line = (
            <line
            key={index}
            x1={previousCapPoint.x}
            y1={previousCapPoint.y}
            x2={point.x}
            y2={point.y}
            stroke="#00882b"
            strokeWidth={4}/>
            );
        previousCapPoint = point;
        return line;
    };

    var drawYearLines = (point, index) => {
        return (
            <line
            key={'y' + index}
            y1={0}
            y2={500}
            x1={point.x}
            x2={point.x}
            stroke="#cccccc"
            strokeWidth={1}/>
        );
    };

    var dr

    return (
        <div style={wrapperStyle}>
            <h3 className="slider-label">Balance</h3>
            <svg
                viewBox={'0 0 1000 500'}
                style={{
                marginLeft: 90,
                marginTop: -40
            }}>
                {[500, 1000, 1500, 2000, 2500].map((price, i) => 
                    <line x1={0} y1={600 - (price / 4)} x2={1000} y2={600 - (price / 4)} stroke="#cccccc" strokeWidth={1} />
                )}
                {spPoints.map((point, i) => drawYearLines(point, i))}
                {spPoints.map((point, i) => drawSPLine(point, i))}
                {capPoints.map((point, i) => drawCapLine(point, i))}
            </svg>
        </div>
    );

};