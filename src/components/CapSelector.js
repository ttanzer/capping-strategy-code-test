import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import '../styles/CapSelector.css';

import React from 'react'
import Slider from 'rc-slider';
const SliderWithTip = Slider.createSliderWithTooltip(Slider);

export const CapSelector = ({ minPercent, maxPercent, onSelectorChange }) => {
    const wrapperStyle = { width: 400, margin: 50 };

    return (
        <div style={wrapperStyle}>
            <SliderWithTip className="cap-selector" 
                           min={minPercent} 
                           max={maxPercent} 
                           step={1}
                           tipFormatter={value => `${value}%`}
                           onChange={onSelectorChange} />
        </div>
    );

};