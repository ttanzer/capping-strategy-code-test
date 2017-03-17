import '../styles/BalanceGraph.css';

import React from 'react'

export const BalanceGraph = ({ capPercent, startYear, endYear, data }) => {

    var numberOfYears = endYear - startYear;

    if (!capPercent || !startYear || !endYear || numberOfYears < 1) {
        return (
            <div>
                <h3>Please select a cap percentage, start and end year</h3>
            </div>
        )
    }

    console.log(data);
    var spPoints = [];
    var previousSpPoint = null;

    for (let year = startYear; year <= endYear; year++) {
        var price = data.find(entry => entry.year === year).price;
        var x = (year - startYear) * (1000 / numberOfYears);
        var y = 600 - (price / 4);
        spPoints.push({x, y});
    }

    var drawSPLine = (point) => {
        if (!previousSpPoint) previousSpPoint = point;
        const line = (
            <line x1={previousSpPoint.x} y1={previousSpPoint.y} x2={point.x} y2={point.y} stroke="#0365c0" strokeWidth={4} />
        );
        previousSpPoint = point;
        return line;
    }

    const wrapperStyle = {  margin: 50 };

    return (
        <div style={wrapperStyle}>
            <h3 className="slider-label">Balance</h3>
            <svg viewBox={'0 0 1000 500'} style={{marginLeft: 90, marginTop: -40}}>
                {spPoints.map((point, i) =>
                    drawSPLine(point)
                )}
            </svg>
        </div>
    );

};