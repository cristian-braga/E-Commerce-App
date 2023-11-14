import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Redefinir Senha" />
      <BreadCrumb title="Redefinir Senha" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Redefinir Senha</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirmar senha"
                />
                <div>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <button className="button border-0">Redefinir</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ResetPassword;