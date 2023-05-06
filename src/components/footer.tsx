import React from "react";

function FOOTER() {
    return (
        <footer className="px-6 py-4">
            <h1>Contactos</h1>
            <nav>
                <div>
                    <ul>
                        <li>
                            <li>
                                <a href="https://wa.me/50683297470" target="_blank">
                                    <img src="Contacto.png" alt="contacto" width="85px" height="85px" />
                                </a>
                            </li>
                            <a href="mailto:martin.jimenez.duarte@est.una.ac.cr" >
                                <img src="Correo.png" alt="contacto" width="85px" height="85px" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );

}
export default FOOTER;