import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {format} from "date-fns"
import "./style.css"

const PostPage = () => {

    const {id} = useParams()
    const [postInfo, setPostInfo] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
        .then(response => response.json())
        .then(data => setPostInfo(data))
    }, [])

    return (
        <>
            {postInfo !== null &&
                <div className="post-page">
                    <h1>{postInfo.title}</h1>
                    <time className="time">{format(new Date(postInfo.createdAt), 'd MMM, yyyy HH:mm')}</time>
                    <div className="author">by {postInfo.author.username}</div>
                    <div className="img">
                        <img src={`http://localhost:4000/${postInfo.cover}`} alt="post image" />
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
                </div>
            }
        </>
    )

}

export default PostPage