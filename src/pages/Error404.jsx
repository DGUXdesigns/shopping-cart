import { Link } from 'react-router-dom';
import '../css/Error404.css';

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Page Not Found</h1>
      <p>Oops! Looks like you went the wrong way</p>
      <hr />
      <Link to={'/'}>Go Back Home</Link>
    </div>
  );
}

export default ErrorPage;
