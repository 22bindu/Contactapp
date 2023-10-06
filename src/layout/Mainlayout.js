import Navbar from "../navbar/Navbar";
import React from 'react'
    let Mainlayout=({children})=>{
        return(
            <div>
            <Navbar></Navbar>
            <div>{children}</div>
            </div>

        );


    }
    export default Mainlayout