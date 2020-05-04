import {BuyBook} from "./bookt";

const initialState={
  NumOfBook:10
}

const BReducer=(state=initialState,action)=>{
  switch(action.type){
    case BuyBook:return{
      ...state,
      NumOfBook:state.NumOfBook-1
    }
    default: return state

  }
}

export default Bookr;