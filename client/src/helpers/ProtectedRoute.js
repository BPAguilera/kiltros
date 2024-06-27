import { useContext } from 'react';
import { authContext } from './authContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, rol, ...rest }) => {
    

    const { authState } = useContext(authContext);
    //console.log(authState)

    // if (!authState.state) {
    //     console.log(authState.state)
    //     // Si el usuario no está autenticado, redirigir a la página de login
    //     console.log("miau")
    //     return <Navigate to="/Prohibido" />;
    // }

    // if (rol && !rol.includes(authState.rol)) {
    //     console.log(rol)
    //     console.log(authState.rol)
    //     // Si el usuario no tiene el rol adecuado, redirigir a una página de no autorizado o página principal
    //     return <Navigate to="/Prohibido" />;
    // }

    // Si el usuario está autenticado y tiene el rol adecuado, renderizar el componente solicitado
    return <Component {...rest} />;
};

export default ProtectedRoute;
