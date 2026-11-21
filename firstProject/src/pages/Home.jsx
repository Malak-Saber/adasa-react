import { Link } from "react-router-dom";
import postsData from "../data/posts.json";
import BlogCard from "../components/BlogCard";


function Home() {
  const featuredPosts = postsData.posts.filter(
    (post) => post.featured
  );
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="section-label">مرحباً بك في عدسة</span>
            <h1>
              اكتشف فن
              التصوير الفوتوغرافي      
            </h1>
            <p>
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <Link to="/blog" className="primary-button">
              اكتشف المقالات
            </Link>
          </div>
          <div className="hero-image">
            {/* <img src={heroImage} alt="التصوير الفوتوغرافي" /> */}
          </div>
        </div>
      </section>
      <section className="featured-section container">
        <div className="section-heading">
          <div>
            <span className="section-label">مختارة لك</span>
            <h2>أبرز المقالات</h2>
          </div>
          <Link to="/blog" className="text-link">
            عرض كل المقالات ←
          </Link>
        </div>
        <div className="blog-grid">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;