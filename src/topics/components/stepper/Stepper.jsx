import { useState } from 'react';
import './stepper.css';

const Stepper = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handlePrevious =()=> {
        if(currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }
    const handleNext =()=> {
        if(currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    return (
        <div className="stepper">
            <div className="step-indicator">
                {
                    steps.map((step, index) => {
                        return (
                            <div key={index} className={`step ${index === currentStep ? 'active' : index < currentStep ? 'completed' : ''}`}>
                                {step.name}
                            </div>
                        )
                    })}
            </div>
            <div className="step-content">
                {steps[currentStep].content}
            </div>
            <div className="step-actions">
                <button onClick={handlePrevious} disabled={currentStep === 0}>Previous</button>
                <button onClick={handleNext} disabled={currentStep === steps.length - 1}>Next</button>
            </div>

        </div>
    )
}

export default Stepper