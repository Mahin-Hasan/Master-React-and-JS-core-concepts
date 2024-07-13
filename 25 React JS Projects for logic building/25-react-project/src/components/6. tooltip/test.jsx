import Tooltip from ".";
import './tooltip.css'

const TooltipTest = () => {
    return (
        <div>
            <h1>Tool Tip</h1>
            <Tooltip delay={1000} content={"Tooltip Content"} children={<p>Hover ME</p>}/>
        </div>
    );
};

export default TooltipTest;