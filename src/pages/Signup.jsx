import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Signup = () => {
  return (
    <>
      <Meta title="Cadastrar" />
      <BreadCrumb title="Cadastrar" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Criar Conta</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Nome"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <CustomInput
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <div>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <button className="button border-0">Cadastrar</button>
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

export default Signup;