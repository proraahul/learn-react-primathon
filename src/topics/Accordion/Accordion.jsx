import React, {useState} from 'react'

const Accordion = ({sections}) => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [toggle, setToggle] = useState(false);

    const handleAccordion = (index) => {
        setActiveIndex(index);
        setToggle(!toggle);
    }



  return (
    <div>
        {
            sections.map((section, index) => {
                return(
                <div key={index}>
                    <div onClick={() => handleAccordion(index)}>
                        <h1
                        style={
                            {
                                backgroundColor : activeIndex === index? '#eee' : '#fff',
                                padding: '16px',
                                border: '2px solid #eee'
                            }
                        }
                        >{section.title}</h1>
                    </div>
                    {
                        activeIndex === index && (
                            <div style={{ 
                                padding: '10px', 
                                display: toggle? 'block' : 'none'
                            }}>{section.content}</div>
                        )
                    }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Accordion