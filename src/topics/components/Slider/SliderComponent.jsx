import { useState } from "react";
import ReactSlider from 'react-slider'

function SliderComponent({ min, max, step, defaultValue, onChange }) {
    const [value, setValue] = useState(defaultValue);
    const handleSliderChange = (newValue) => {
        setValue(newValue);
        onChange(newValue);
    };
    return (
        <div className="slider">
            <ReactSlider
                min={min}
                max={max}
                step={step}
                value={value} onChange={handleSliderChange} className="slider__input"
            />
            <div className="slider__value">{value}</div> 
        </div>
    );
}

export default SliderComponent;