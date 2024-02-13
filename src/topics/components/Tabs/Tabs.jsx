import { useState } from 'react';
import './tabs.css';

const Tabs = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    }

  return (
    <div className="tabs">
        <div className="tabs-buttons">
            {
                tabs.map((tab, index)=>{
                    return(
                        <button key={index}
                        className={index === activeTab ? 'button active' : 'button'}
                        onClick={()=> handleTabClick(index)}
                        >
                            {tab.title}
                        </button>
                    )
                })
            }
        </div>
        <div className="tab-content">
        {tabs[activeTab].content}
        </div>
    </div>
  )
}

export default Tabs