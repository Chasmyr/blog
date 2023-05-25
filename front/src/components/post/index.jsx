import { Link } from "react-router-dom"
import "./style.css"
import {format} from "date-fns"

const Post = ({post}) => {

    return (
        <div className="post">
            <div className="img">
                <Link to={`/post/${post._id}`}>
                    <img src={'http://localhost:4000/'+post.cover} alt="img" />
                </Link>
            </div>
            <div className="text">
                <Link to={`/post/${post._id}`}>
                    <h2>{post.title}</h2>
                </Link>
                <p className="info">
                    <span className="author">{post.author.username}</span>
                    <time>{format(new Date(post.createdAt), 'd MMM, yyyy HH:mm')}</time>
                </p>
                <p className="desc">{post.summary}</p>
            </div>
        </div>
    )
}

export default Post