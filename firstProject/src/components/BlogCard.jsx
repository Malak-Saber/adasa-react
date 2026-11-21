import { Link } from "react-router-dom";


function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="card-image">
        <img src={post.image} alt={post.title} />
        <span className="category-badge">{post.category}</span>
      </Link>
      <div className="card-content">
        <div className="card-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <div className="card-author">
          <img src={post.author.avatar} alt={post.author.name} />
          <div>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <Link to={`/blog/${post.slug}`} className="read-more">
          اقرأ المقال ←
        </Link>
      </div>
    </article>
  );
}
export default BlogCard;