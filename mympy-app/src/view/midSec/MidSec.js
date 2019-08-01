import React from 'react';

import midSwirl from '../../img/midSwirl.png';
import meteor from '../../img/meteor.png';
import female from '../../img/female.svg';

const MidSec = () => {
    return (
        <div className="mid-main">
            <div className="top-mid">
                <div className="div-wrap">
                    <div className="top-div">
                        <h1>Are you a Dreamer or Supporter?</h1>
                    </div>
                    <div className="btns">
                        <button className="dreamer">Dreamer</button>
                        <button className="supporter">Supporter</button>
                    </div>
                    <div className="meteor">
                        <img className="meteor-img" src={meteor} alt="meteor" />
                    </div>
                </div>
            </div>
            <div className="empty">
            <img src={female} alt="female" />
            </div>
        </div>
    )
}

export default MidSec;