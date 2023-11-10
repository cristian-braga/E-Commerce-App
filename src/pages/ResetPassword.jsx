import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Redefinir Senha" />
      <BreadCrumb title="Redefinir Senha" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Redefinir Senha</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="password" name="password" className="form-control" placeholder="Senha" />
                  </div>
                  <div className="mt-1">
                    <input type="password" name="confpassword" className="form-control" placeholder="Confirmar senha" />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                      <button className="button border-0">Redefinir</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;