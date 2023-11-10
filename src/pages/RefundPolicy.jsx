import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const RefundPolicy = () => {
  return (
    <>
      <Meta title="Política de Devolução" />
      <BreadCrumb title="Política de Devolução" />
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

export default RefundPolicy;