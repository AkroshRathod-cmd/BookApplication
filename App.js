import React from 'react';
import {provider} from "react-redux";
import books from "./books";
import bookc from "./bookc";

function App() {
    return (
      <provider books={books}>
        <div>
            <bookc/>
        </div>
      </provider>
    )
}

export default bookc;

