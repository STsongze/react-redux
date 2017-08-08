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