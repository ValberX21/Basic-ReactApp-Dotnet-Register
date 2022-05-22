import React from "react";
import {Form} from './Form';
import {BrowserRouter, NavLink, Routes,Route} from 'react-router-dom';
import { ListEmpreas } from "./ListEmpresas";

function App(){
    return(
        <BrowserRouter>
        <div className="center">
            <h3 className="d-flex justify-content-center m-3">
                React JS FrontEnd
            </h3>

            <nav className="navv navbar navbar-expand-sm bg-light navbar-dark ">
                <ul className="navbar-nav">
                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/form">
                          Cadastrar Empresa
                        </NavLink>
                    </li>

                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/listEmpreas">
                          Listar Empreas
                        </NavLink>
                    </li>

                </ul>
            </nav>

        <Routes>
             <Route path="/" element={<Form/>} /> 
            <Route path="/Form" element={<Form/>} /> 
            <Route path="/ListEmpreas" element={<ListEmpreas />} />
        </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App;