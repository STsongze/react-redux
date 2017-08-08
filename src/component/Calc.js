import React from 'react';

const Calc = (props) => {
    let{number,onPlus,onMinus,onOdd,onAnync}=props;
    return (
        <div>
           <span id="spanResult">{number}</span>
            <br/>
            <input id="btn1" type="button" value="plus" onClick={onPlus}/>
            <input id="btn2" type="button" value="minus" onClick={onMinus}/>
            <input id="btn3" type="button" value="if odd plus" onClick={onOdd}/>
            <input id="btn4" type="button" value="anync plus" onClick={onAnync}/> 
        </div>
    );
};

export default Calc;