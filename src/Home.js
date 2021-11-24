import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(process.env.REACT_APP_DB_URL);
  return (
    <div className='home'>
      {isPending && !error && <p>Loading data...</p>}
      {!isPending && error && <p>{error}</p>}
      {!isPending && !error && blogs.length > 0 && (
        <BlogList blogs={blogs} title='All Blogs' />
      )}
    </div>
  );
};

export default Home;
