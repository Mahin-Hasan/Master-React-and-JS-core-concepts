import { useEffect, useState } from "react";
import "./ripple.css"


const ButtonRippleEffect = () => {
  const [isRippleEffect, setIsRippleEffect] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: -1, y: -1 });

  function handleRippleEffect(e) {
    // console.log(e.target.getBoundingClientRect(), e.clientX, e.clientY);

    const rect = e.target.getBoundingClientRect();
    setCoordinates({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }
  useEffect(() => {
    if ((coordinates.x !== -1, coordinates.y !== -1)) {
      setIsRippleEffect(true);
      setTimeout(() => setIsRippleEffect(false), 500);
    } else {
      setIsRippleEffect(false);
    }
  }, [coordinates]);

  useEffect(() => {
    if (!isRippleEffect) setCoordinates({ x: -1, y: -1 });
  }, [isRippleEffect]);

//   console.log(coordinates, isRippleEffect);

  return (
    <div className="ripple-effect-container">
      <h2>Button Ripple Effect</h2>
      <button className="ripple-btn" onClick={handleRippleEffect}>
        {isRippleEffect ? (
          <span
            style={{ left: coordinates.x, top: coordinates.y }}
            className="ripple-span"
          >
            
          </span>
        ) : null}
        Click Button to see Ripple Effect
      </button>
    </div>
  );
};

export default ButtonRippleEffect;
