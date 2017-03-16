import React from 'react'
const Slider = require('rc-slider');
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export const PeriodSelector = ({ minYear, maxYear, onSelectorChange }) => {

    return (
        <Range min={minYear} 
               max={maxYear} 
               tipFormatter={value => `${value}`} 
               onChange={onSelectorChange} />
    );

};