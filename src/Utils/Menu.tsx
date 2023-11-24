import { NavLink } from "react-router-dom";
import IndiceGeneros from "../Generos/IndiceGeneros";

export default function Menu(){

    const claseActiva = "active";

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React Películas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Generos">Géneros</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}