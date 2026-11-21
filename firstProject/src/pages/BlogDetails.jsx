import { Link, useParams } from "react-router-dom";
import postsData from "../data/posts.json";


function BlogDetails() {
  const { slug } = useParams();
  const post = postsData.posts.find(
    (item) => item.slug === slug
  );
  if (!post) {
    return (
      <section className="container empty-state">
        <h2>المقال غير موجود</h2>
        <Link to="/blog" className="primary-button">
          العودة إلى المدونة
        </Link>
      </section>
    );
  }
  const contentSections = post.content.split("\n");
  return (
    <article className="details-page container">
      <Link to="/blog" className="back-link">
        → العودة إلى المقالات
      </Link>
      <div className="details-header">
        <span className="category-badge">{post.category}</span>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <div className="card-author">
          <img src={post.author.avatar} alt={post.author.name} />
          <div>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <div className="card-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
      <img className="details-image" src={post.image} alt={post.title} />
      <div className="article-content">
        {contentSections.map((line, index) => {
          if (line.startsWith("## ")) {
            return <h2 key={index}>{line.replace("## ", "")}</h2>;
          }
          if (line.trim() === "") {
            return null;
          }
          return <p key={index}>{line}</p>;
        })}
      </div>
      <div className="article-tags">
        {post.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </article>
  );
}
export default BlogDetails;