import React from 'react';
import  Link  from "next/link";

function HEADER() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div>
        <img src="logo2.png" alt="Logo" width={75} height={75} />
      </div>
      <nav className="flex items-center">
        <ul id="Menu">
          <li >
            <Link href="#Seccion1" id="S1"className="text-gray-700 hover:text-gray-900">Personal</Link>
          </li>
          <li >
            <Link href="#Seccion2" id="S2"className="text-gray-700 hover:text-gray-900">Proyecto</Link>
          </li>
          <li>
            <Link href="#Seccion3" id="S3" className="text-gray-700 hover:text-gray-900">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HEADER;