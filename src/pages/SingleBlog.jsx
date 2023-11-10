import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Favoritos" />
      <BreadCrumb title="Favoritos" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft /> Voltar aos Blogs
                </Link>
                <h3 className="title">
                  Lorem ipsum dolor sit amet.
                </h3>
                <img src="../images/blog-1.jpg" alt="blog" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem earum corrupti perferendis aliquid minima voluptates ratione illum hic. Corrupti eaque quaerat vitae libero, reiciendis, itaque quasi dolorem modi hic, veritatis quia natus fugiat exercitationem ut officia odit obcaecati deleniti. Quibusdam, nam earum tempora placeat cumque illum. Consectetur, consequuntur sapiente?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;