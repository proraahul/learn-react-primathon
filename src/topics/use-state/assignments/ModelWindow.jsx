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
        <button onClick={handleOpen}>{props.buttonText}</button> 
        {isOpen &&
            <div className="modal">
                <div className="modal-content">
                    <button className="close-button" onClick={handleClose}>Close</button>
                    {props.children}
                </div> </div>
        }
    </>
    );
}

export default ModelWindow;