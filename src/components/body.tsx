import React from "react";
import  PERSONAL from "./section/personal";
import Carrusel from "./section/project";
import CALL from "./section/call";

function BODY(){
    return(
        <main>
            <PERSONAL />
            <Carrusel />
            <CALL />
        </main>
    );
}
export default BODY;