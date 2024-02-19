import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ data }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
    };

    return (
        <div className="carousel">
            <button onClick={handlePrevClick} className='prev'>prev</button>
            <div className="carousel-item">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className={index === setActiveIndex ? 'slide active' : 'slide'}>
                                {index === setActiveIndex && <img src={item.image} alt={index} width='200px'/>}
                            </div>
                        )
                    })
                }
                <h3>{data[activeIndex].title}</h3> 
                <p>{data[activeIndex].description}</p>
            </div>
            <button onClick={handleNextClick} className='next'>next</button>
        </div>
    );
}

export default Carousel
