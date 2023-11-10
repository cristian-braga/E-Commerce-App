import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({img_src, brand, title, price, grid}) => {
  let location = useLocation();

  return (
    <div className={`${location.pathname == "/product" ? `col-${grid}` : "col-3"}`}>
      <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to="">
            <img src="../images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src={img_src} alt="blog" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">{title}</h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">{price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="">
              <img src="../images/prodcompare.svg" alt="compare" />
            </Link>
            <Link to="">
              <img src="../images/view.svg" alt="view" />
            </Link>
            <Link to="">
              <img src="../images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;