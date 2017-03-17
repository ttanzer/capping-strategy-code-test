import React from 'react'
const Slider = require('rc-slider');
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export const PeriodSelector = ({ minYear, maxYear, onSelectorChange }) => {
    const wrapperStyle = {  margin: 50 };

    return (
        <div style={wrapperStyle}>
            <h3 className="slider-label">Range</h3>
            <Range min={minYear} 
                   max={maxYear} 
                   tipFormatter={value => `${value}`} 
                   onChange={onSelectorChange} />
        </div>
    );

};