import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const AuthorDetails = () => {
  const { id } = useParams();
  return (
    <div className='author-details'>
      <p>
        Thank you for your interest in the author 🙏, however this page is
        currently under construction 🛠 <br />
        Check back later ⏱
      </p>
      <br />
      <Link to='/'>
        <button>Back to 🏠</button>
      </Link>
    </div>
  );
};

export default AuthorDetails;
