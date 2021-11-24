import { useState } from 'react';
import { useHistory } from 'react-router';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    let authorid;
    switch (author) {
      case 'mario':
        authorid = 9;
        break;
      case 'yoshi':
        authorid = 8;
        break;
      default:
        return authorid;
    }
    const blog = { title, body, author, authorid };
    fetch(process.env.REACT_APP_DB_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option>Select the author!</option>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
