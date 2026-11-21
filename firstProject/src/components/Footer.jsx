import { Link } from "react-router-dom";
import { useState } from "react";
import postsData from "../data/posts.json";


function Footer() {
  const [email, setEmail] = useState("");
  const categories = postsData.categories;
  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    alert("شكراً لاشتراكك في نشرة عدسة!");
    setEmail("");
  }
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-icon">ع</span>
            <span>عدسة</span>
          </Link>
          <p>
            مدونة متخصصة في فن التصوير الفوتوغرافي،
            نشارك معكم أسرار المحترفين ونصائح عملية
            لتطوير مهاراتكم.
          </p>
          <div className="social-links">
            <a href="https://twitter.com/adasah" target="_blank" rel="noreferrer">X</a>
            <a href="https://github.com/adasah" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/company/adasah" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://youtube.com/@adasah" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>استكشف</h3>
          <Link to="/">الرئيسية</Link>
          <Link to="/blog">المدونة</Link>
          <Link to="/about">من نحن</Link>
        </div>
        <div className="footer-column">
          <h3>التصنيفات</h3>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/blog?category=${encodeURIComponent(category.name)}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div className="footer-newsletter">
          <h3>ابقَ على اطلاع</h3>
          <p>
            اشترك للحصول على أحدث المقالات والتحديثات.
          </p>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">اشترك</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 عدسة. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
export default Footer;