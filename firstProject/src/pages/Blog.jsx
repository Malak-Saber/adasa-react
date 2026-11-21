import { useState } from "react";
import postsData from "../data/posts.json";
import BlogCard from "../components/BlogCard";


function Blog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const categories = ["الكل", ...postsData.categories.map(
    (category) => category.name
  )];
  const filteredPosts = postsData.posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "الكل" ||
      post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <section className="blog-page container">
      <div className="page-heading">
        <span className="section-label">مدونتنا</span>
        <h1>استكشف مقالاتنا</h1>
        <p>
           اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
      <div className="blog-controls">
        <input
          type="search"
          placeholder="ابحث عن مقال..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category ? "active" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="results-info">
        <span>عدد المقالات: {filteredPosts.length}</span>
      </div>
      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ):(
        <div className="empty-state">
          <h2>لم يتم العثور على مقالات</h2>
          <p>جربي البحث بكلمات مختلفة أو اختاري تصنيفاً آخر.</p>
        </div>
      )}
    </section>
  );
}
export default Blog;