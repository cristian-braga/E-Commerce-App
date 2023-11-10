import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Recuperar Senha" />
      <BreadCrumb title="Recuperar Senha" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Redefinir Senha</h3>
              <p className="text-center m-3">
                Vamos te enviar um email para redefinir sua senha
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="email" name="email" className="form-control" placeholder="Email" />
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-center flex-column gap-15 mt-3">
                    <button type="submit" className="button border-0">Enviar</button>
                    <Link to="/login">Cancelar</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;