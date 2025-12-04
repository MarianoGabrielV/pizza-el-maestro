// src/components/Navbar.jsx
import { useState } from "react";
import { clientConfig } from "../config/clientConfig";

export default function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    // Al hacer click en un link, cerramos el menú en mobile
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top"
      style={{ backgroundColor: clientConfig.colores.primario }}
    >
      <div className="container">
        {/* Logo + Nombre */}
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#hero"
          onClick={handleNavClick}
        >
          {clientConfig.logo && (
            <img
              src={clientConfig.logo}
              alt={clientConfig.nombre}
              style={{
                height: "40px",
                width: "40px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          )}
          <span
            style={{
              color: clientConfig.colores.textoClaro,
              fontWeight: "bold",
            }}
          >
            {clientConfig.nombre}
          </span>
        </a>

        {/* Botón hamburguesa móvil (controlado por React) */}
        <button
          className="navbar-toggler position-relative"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {cartCount}
            </span>
          )}
        </button>

        {/* Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="#menu"
                onClick={handleNavClick}
              >
                Menú
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light d-flex align-items-center"
                href="#cart"
                onClick={handleNavClick}
              >
                <span>Mi pedido</span>
                {cartCount > 0 && (
                  <span className="badge bg-success ms-2">
                    {cartCount}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
