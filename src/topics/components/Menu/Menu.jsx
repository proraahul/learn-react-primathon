import React from 'react';

const Menu = ({ options, onSelect }) => {
    return (
        <div className="p-4 border">
            <ul>
                {
                    options.map((option, index) => (
                        <li key={index} onClick={() => onSelect(option)} className='border p-2'>
                            {option}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Menu;
