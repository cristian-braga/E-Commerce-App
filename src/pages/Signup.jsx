import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title="Cadastrar" />
      <BreadCrumb title="Cadastrar" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Criar Conta</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" name="name" className="form-control" placeholder="Nome" />
                  </div>
                  <div>
                    <input type="email" name="email" className="form-control" placeholder="Email" />
                  </div>
                  <div>
                    <input type="tel" name="phone" className="form-control" placeholder="Telefone" />
                  </div>
                  <div className="mt-1">
                    <input type="password" name="password" className="form-control" placeholder="Senha" />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                      <button className="button border-0">Cadastrar</button>
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

export default Signup;