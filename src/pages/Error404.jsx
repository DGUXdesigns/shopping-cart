import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>Oops! Looks like you went the wrong way</p>
      <hr />
      <Link to={'/'}>Go Back Home</Link>
    </>
  );
}

export default ErrorPage;
