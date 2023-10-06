
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mr-auto ms-5" href="#">Logo</a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Comprar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Vender</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Alquiler</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                <a className="btn btn-outline-primary ml-auto me-5" href="#">Iniciar Sesión</a>
            </div>
        </nav>
    );
}

export default NavBar