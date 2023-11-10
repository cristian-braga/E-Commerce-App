import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title="Favoritos" />
      <BreadCrumb title="Favoritos" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="cross img-fluid position-absolute" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="p-3">
                  <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="cross img-fluid position-absolute" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="p-3">
                  <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="cross img-fluid position-absolute" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="p-3">
                  <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;