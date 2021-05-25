import React, { useState } from 'react';
import './FormPanel.css';

const FormPanel = () => {
    const [weight, setWeight] = useState("");
    const [heightFeet, setHeightFeet] = useState("");
    const [heightInches, setHeightInches] = useState("");
    const [m_or_f, set_m_or_f] = useState("");
    const [goal, setGoal] = useState("");
    const [bodyFat, setBodyFat] = useState("");

    console.log(m_or_f);
    console.log(goal);

    return (
        <div className="FormPanel">
            <form action="" className="user-info">
                <div className="user-info__item">
                    Enter your weight:
                    <input 
                        value='lbs' 
                        onChange={ e => setWeight(e.target.value) } 
                        type="text" 
                        className='weight__input-box'
                    />
                </div>
                <div className="user-info__item">
                    Enter your height:
                    <div className="input-box__height">
                        <input 
                            value='ft'
                            onChange={ e => setHeightFeet(e.target.value) } 
                            type="number" 
                            className='height-ft__input-box'
                        />ft
                        <input 
                            value='in'
                            min='0' 
                            max='12' 
                            onChange={ e => setHeightInches(e.target.value) } 
                            type="number" 
                            className='height-in__input-box'
                        />in
                    </div>
                </div>
                <div className="user-info__item">
                    Sex:
                    <select class='sex' name="sex" onChange={ e => console.log(e.target.value) }>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>
                <div className="user-info__item">
                    Goal:
                    <select class='goal' name="goal" onChange={ e => setGoal(e.target.value) }>
                        <option value={ goal }>Gain Weight</option>
                        <option value={ goal }>Lose Weight</option>
                        <option value={ goal }>Maintain Weight</option>
                    </select>
                </div>
                <div className="user-info__item">
                    Target body fat percentage:
                    <input 
                        value={ bodyFat }
                        type="number" 
                        min='0' 
                        max='100' 
                        onChange={ e => setBodyFat( e.target.value )}
                    />
                </div>
            </form>
        </div>
    );
}

export default FormPanel;