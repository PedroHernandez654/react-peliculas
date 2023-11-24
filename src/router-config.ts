import CrearGenero from "./Generos/CrearGeneros";
import EditarGenero from "./Generos/EditarGenero";
import IndiceGeneros from "./Generos/IndiceGeneros";
import LandingPage from "./LandingPage";

const rutas  = [
    {path: '/Generos/crear', componente: CrearGenero},
    {path: '/Generos/editar', componente: EditarGenero},
    {path: '/Generos', componente: IndiceGeneros},
    {path:'/', componente: LandingPage, exact: true}
];

export default rutas;