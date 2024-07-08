import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

function Post({ _id, title, summary, content, cover, createdAt, author }) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          {/* <img src={`${API_URL}/post` + cover} /> */}
          <img src={`${API_URL}/${cover}`} alt={title} />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}

export default Post;
