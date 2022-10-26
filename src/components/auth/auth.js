import './auth.css';
import React, { useState } from 'react';
import useAnalyticsEventTracker from '../../tools/useAnalyticsEventTracker';

export default function Auth() {
  const gaEventTracker = useAnalyticsEventTracker('Auth');
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  let [passwordFailCount = 0, setpasswordFailCount] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    gaEventTracker('Presiono Enviar');

    if (password.toLowerCase() !== 'baby') {
      setpasswordFailCount(passwordFailCount++);
      gaEventTracker(`Fallo ${passwordFailCount}`);
      if (passwordFailCount > 0) {
        if (passwordFailCount === 1) {
          setpasswordError("No puedo creer que hayas fallado");
        } else {
          setpasswordError(`Enseguida sigues fallando ${passwordFailCount} veces`);
        }
      }
    } else {
      gaEventTracker(`Paso despues de ${passwordFailCount}`);
      setpasswordError('');
      setpasswordFailCount(0);
      window.open('https://rankey1496.github.io/mariabirthday/')
    }
  };

  return (
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={loginSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">¡Hola Maria!</h3>
          <div className="form-group mt-3">
            <h6>Primero que todo, debo asegurarme que seas tú quien abra esta página.</h6>
            <h6>Creo que esto es muy fácil de verificar, solo debes responder una pregunta.</h6>
          </div>
          <div className="form-group mt-3">
            <label>¿De que manera te llamaba la mayoría de veces?</label>
            <input
              type="password"
              className="form-control mt-1"
              id="input-Password"
              placeholder="Ingrese apodo"
              onChange={(event) => setPassword(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}