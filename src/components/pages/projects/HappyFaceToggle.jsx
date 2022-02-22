import React from 'react';
import "./happyFaceToggle.scss";

export default function HappyFaceToggle({isHappy, setIsHappy}) {

    
    const changeMode = () => {
        isHappy ? setIsHappy(false) : setIsHappy(true);
    }
    return (
        
        <>
            <div className={isHappy ? "greenMode" : "" }>
                <div className="switchpos">
                    <label className="switch">
                        <input type="checkbox" onClick={() => changeMode()} defaultChecked ={isHappy ? true : false}/>
                        <span className="slider "></span>
                        <div className="happy">
                            <div className="eyes"></div>
                            <div className="eyes2 "></div>
                            <div className="halfCircle"></div>
                            <div className="eyesAfter"></div>
                            <div className="eyes2After"></div>
                        </div>
                        <div className="aftermouth" id="aftermouthV"></div>
                    </label>
                </div>
            </div>
        </>
    );
}
