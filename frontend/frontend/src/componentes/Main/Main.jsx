import Login from "../Login/Login";
import Home from "../home/home.jsx";

function parseJwt(token) {
    if (!token) return false; // 🔐 Retorna false si no hay token

    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error al decodificar token:', error);
        return false; // 🔁 También retorna false si el token está dañado
    }
}

const token = localStorage.getItem('token');
const decoded = parseJwt(token);

// ⏳ Si hay token válido, que no ha expirado
const tokenExisteYEsValido = decoded && decoded.exp * 1000 > Date.now();

const Main = () => {
    return (
        <>
            {tokenExisteYEsValido ? <Home /> : <Login />}
        </>
    );
}

export default Main;
