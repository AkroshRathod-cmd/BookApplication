import React from 'react';
import {connect} from "react-redux";
import {buyBook} from "./buyBook";

function bookc(props) {
    return (
        <div>
            <h2>No of Books{props.NumOfBook}</h2>
            <button onClick={props.buyBook}>Buy Books</button>
        </div>
    )
}

const mapStateToProps=state=>{
  return{
    NumOfBook:state.NumOfBook
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    buyBook:()=>dispatch(buyBook())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(bookc);

