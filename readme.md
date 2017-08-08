**React结合Redux的使用**
### 搭建环境
#### 安装react
- 全局安装create-react-app

```
npm install -g create-react-app
```
- 创建目录

```
create-react-app react-redux
```
- 进入目录

```
cd react-redux
```
- 运行

```
npm start
```
#### 安装react-redux
- 装到配置文件里面

```
 npm install react-redux --save
```
> 如果这条命令安装不上的话，可以使用cnpm安装；
### 编写代码
#### 创建文件
- component文件夹，创建Calc.js文件

```
Calc.js

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
```
- container文件夹，创建CalcContainer.js文件

```
CalcContainer.js

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
```
- reducer文件夹，创建index.js文件

```
index.js

function reducer(state=0,action){
            switch(action.type){
                case "plus":{
                    state=state+1;
                    break;
                }
                case "jian":{
                    state=state-1;
                    break;
                }
                case "odd_plus":{
                    if(state%2===1){
                        state+=1;
                    }
                    break;
                }
                case "async_plus":{
                   state=state+1;
                    break;
                }
                default:{
                  break;
                }
            }
            return state;
        }

export default reducer;
```
- App.js文件

```
import React, { Component } from 'react';

import Calc from './component/Calc';

import CalcContainer from './container/CalcContainer';


class App extends Component {
  constructor(props){
      super();
  }

  render() {
    return (
        
          <CalcContainer>
            <Calc />
          </CalcContainer>
    );
  }
}

export default App;

```
- index.js文件

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './reducer/index';
import {Provider} from 'react-redux';

let store =createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

```
> 以上就是react-redux的使用，是不是很简单呢！



