import React from 'react'

// Import the css and module for the sliders
const Slider = require('rc-slider');
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

// Creates the slider to select the time period for the calculations
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