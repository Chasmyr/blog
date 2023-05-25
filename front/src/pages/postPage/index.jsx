import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import {format} from "date-fns"
import "./style.css"
import { connect } from "react-redux"

const PostPage = ({user = null}) => {

    const {id} = useParams()
    const [postInfo, setPostInfo] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
        .then(response => response.json())
        .then(data => {
            if(data?.message) {
                navigate('/erreur')
            } else {
                setPostInfo(data)
            } 
        })
    }, [])

    return (
        <>
            {postInfo !== null &&
                <div className="post-page">
                    <h1>{postInfo.title}</h1>
                    <time className="time">{format(new Date(postInfo.createdAt), 'd MMM, yyyy HH:mm')}</time>
                    <div className="author">by {postInfo.author.username}</div>
                    {user.id === postInfo.author._id && (
                        <div className="edit-container">
                            <Link className="edit" to={`/edit/${postInfo._id}`}>Edit this post</Link>
                        </div>
                    )}
                    <div className="img">
                        <img src={`http://localhost:4000/${postInfo.cover}`} alt="post image" />
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
                </div>
            }
        </>
    )

}

export default connect(
    state => ({
        user: state.userReducer.userInfo
    })
)(PostPage)