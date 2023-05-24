import "./style.css"
import {format} from "date-fns"

const Post = ({post}) => {

    console.log(post)

    return (
        <div className="post">
            <div className="img">
                <img src={'http://localhost:4000/'+post.cover} alt="img" />
            </div>
            <div className="text">
                <h2>{post.title}</h2>
                <p className="info">
                    <a className="author">{post.author.username}</a>
                    <time>{format(new Date(post.createdAt), 'd MMM, yyyy HH:mm')}</time>
                </p>
                <p className="desc">{post.summary}</p>
            </div>
        </div>
    )
}

export default Post