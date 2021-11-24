import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const url = process.env.REACT_APP_DB_URL + id;
  const { data: blog, isPending, error } = useFetch(url);
  const history = useHistory();
  const handleDelete = () => {
    fetch(process.env.REACT_APP_DB_URL + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && !error && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Learn more about{' '}
            <Link to={`/author/${blog.authorid}`}>{blog.author}</Link>, author
            of this blog.
          </p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete this blog!</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
