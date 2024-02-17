import { useState } from "react";
import './modelWindow.css';

const ModelWindow = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
    return (<>
        {
            isOpen ? <button onClick={handleClose} className='close-button'>{props.buttonText2}</button> : <button onClick={handleOpen}>{props.buttonText1}</button>
        }
        {isOpen &&
            <div className="modal">
                <div className="modal-content">
                    <h1>Model Example</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis. Expedita excepturi dicta iste architecto quisquam. Non enim iure deleniti.</p>
                    <img src="https://media-be.chewy.com/wp-content/uploads/2021/06/11142720/husky-dog-breed-1412331876-923x615.jpg" alt="" />
                </div> </div>
        }
    </>
    );
}

export default ModelWindow;