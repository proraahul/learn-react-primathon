import { useState } from 'react';
import { IMG_BASE_URL } from './config';
import './movieCard.css';

const MovieCard = (props) => {
    const [borderColor, setBorderColor] = useState(false);

    const borderStyle = {
        border : borderColor? 'border border-red-500 border-solid' : 'border-none',
    }

    const { movieList } = props;
    
    const onClick = () => {
        console.log('movieCard clicked', movieList);
    //     if(props.onClick){
    //         props.onClick(movieList);
    //     }
    setBorderColor(!borderColor);
    }
    

    return (
        <div className='grid grid-cols-4 flex flex-wrap justify-center'>
            {
                movieList.map((item) => {
                    return(
                        <div className= {`container w-80 flex flex-col m-4 relative overflow-hidden rounded-[4px] bg-[#373B69]`} key={item.id} onClick={() => props.onClick(item)} style={borderStyle}>
                            <img src={IMG_BASE_URL + item.poster_path} alt={item.title} className="w-80"/>
                            <div className="flex justify-between m-4">
                                <h4 className="text-white text-xl font-bold">{item.original_title}</h4>
                                <p className="text-yellow-400 p-2 bg-black rounded-[2px]">{item.vote_average}</p>
                            </div>
                            <div className="overview absolute bg-white p-6 left-0 right-0 bottom-0 max-h-full">
                                <h3 className="text-xl mb-2">overview</h3>
                                {item.overview}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieCard