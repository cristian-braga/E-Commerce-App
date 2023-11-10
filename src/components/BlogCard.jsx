import { Link } from "react-router-dom";

const BlogCard = ({ img_src }) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={img_src} alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dez, 2022</p>
        <h5 className="title">Lorem ipsum dolor sit amet.</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore accusantium dicta.
        </p>
        <Link to="/blog/:id" className="button">Saber mais</Link>
      </div>
    </div>
  );
}

export default BlogCard;