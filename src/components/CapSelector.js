import '../styles/CapSelector.css';

import React from 'react';

// Import the css and module for the sliders
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
const SliderWithTip = Slider.createSliderWithTooltip(Slider);

// Creates the slider used to select the cap percentage
export const CapSelector = ({ minPercent, maxPercent, onSelectorChange }) => {
    return (
        <div className="slidder-wrapper">
            <h3 className="slider-label">Cap</h3>
            <SliderWithTip className="cap-selector" 
                           min={minPercent} 
                           max={maxPercent} 
                           step={1}
                           tipFormatter={value => `${value}%`}
                           onChange={onSelectorChange} />
        </div>
    );

};