// src/admin/AdminRoute.jsx
import { useState } from "react";
import Editor from "./Editor";

export default function AdminRoute() {
  const [authorized, setAuthorized] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "2025") {
      setAuthorized(true);
    } else {
      alert("Código incorrecto");
    }
  };

  if (!authorized) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
      >
        <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <div className="card-header bg-dark text-white text-center">
            Acceso admin
          </div>
          <div className="card-body">
            <p className="small text-muted">
              Ingresá el código de acceso para editar los productos.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Código</label>
                <input
                  type="password"
                  className="form-control"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Contraseña"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <Editor />;
}
