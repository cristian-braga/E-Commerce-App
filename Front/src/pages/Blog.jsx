import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
      <Meta title="Blog" />
      <BreadCrumb title="Blog" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Categorias</h3>
              <div>
                <ul className="ps-0">
                  <li>Smartwatch</li>
                  <li>Tv</li>
                  <li>Câmera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard img_src="images/blog-1.jpg" />
              </div>
              <div className="col-6 mb-3">
                <BlogCard img_src="images/blog-1.jpg" />
              </div>
              <div className="col-6 mb-3">
                <BlogCard img_src="images/blog-1.jpg" />
              </div>
              <div className="col-6 mb-3">
                <BlogCard img_src="images/blog-1.jpg" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Blog;