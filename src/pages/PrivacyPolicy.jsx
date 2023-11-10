import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title="Política de Privacidade" />
      <BreadCrumb title="Política de Privacidade" />
      <section className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl"> 
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;