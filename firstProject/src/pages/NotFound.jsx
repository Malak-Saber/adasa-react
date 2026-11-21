import { Link } from "react-router-dom";


function NotFound() {
  return (
    <section className="not-found container">
      <h1>404</h1>
      <h2>الصفحة غير موجودة</h2>
      <p>عذراً، الصفحة التي تبحثين عنها غير متاحة.</p>
      <Link to="/" className="primary-button">
        العودة للرئيسية
      </Link>
    </section>
  );
}
export default NotFound;