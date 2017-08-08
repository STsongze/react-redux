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
