import React from 'react';
import Calc from '../component/Calc';
import {connect} from 'react-redux';

const mapStoreToProps=(state,ownProps)=>{
    return{
        number:state
    }
}

const mapDispatchToProps=((dispatch,ownProps)=>{
   return{
        onPlus:()=>{
        dispatch({
        type:"plus"
        })
    },
        onMinus:()=>{
        dispatch({
            type:"jian"
            })
    },
        onOdd:()=>{
        dispatch({
            type:"odd_plus"
            })
    },
        onAnync:()=>{
        setTimeout(function(){
            dispatch({
                type:"async_plus"
            })
            },1000)
         }
    }
})

let CalcContainer=connect(mapStoreToProps,mapDispatchToProps)(Calc);

export default CalcContainer;