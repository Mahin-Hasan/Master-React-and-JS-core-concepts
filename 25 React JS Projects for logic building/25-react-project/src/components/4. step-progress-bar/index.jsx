
const StepProgressBar = ({ steps, activeStep, setActiveStep }) => {
    function handlePrevStep() {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));//returns the greater value so that it can not be negative
    }

    function handleNextStep() {
        setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    }

    function calculateCurrentStepWidth() {
        return `${100 / (steps.length - 1) * activeStep}%`
    }

    return (
        <div>
            <div className="steps">
                {
                    steps && steps.length > 0 ?
                        steps.map((stepItem, idx) => <div className={`step ${idx <= activeStep ? 'active' : " "}`} style={{ width: calculateCurrentStepWidth()}} key={idx}>
                            {stepItem}
                        </div>)
                        : null
                }
            </div>
            <div className="step-btn-wrapper">
                <button disabled={activeStep === 0} onClick={handlePrevStep}>Prev Step</button>
                <button disabled={activeStep === steps.length - 1} onClick={handleNextStep}>Next Step</button>
            </div>
        </div>
    );
};

export default StepProgressBar;

