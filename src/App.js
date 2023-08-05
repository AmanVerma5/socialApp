import React from "react";
import "./styles.css";
import Homepage from "./pages/Homepage.js";
import {Routes, Route} from "react-router-dom";
import Item from "./pages/item";
import { BrowserRouter } from 'react-router-dom';

const App=()=>{
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Homepage />} />
                <Route  path="/item/:id" element={<Item />} />
            </Routes>
        </BrowserRouter>
      </div>
    )
}
export default App