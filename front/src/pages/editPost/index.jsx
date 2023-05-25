import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Editor from "../../components/editor"

const EditPost = ({user = null}) => {

    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [cover, setCover] = useState('')

    useEffect(() => {
        if(user === null) {
            navigate('/')
        } else {
            fetch('http://localhost:4000/post/' + id)
            .then(response => {
                response.json()
                .then(postInfo => {
                    setTitle(postInfo.title)
                    setContent(postInfo.content)
                    setSummary(postInfo.summary)
                })
            })
        }
    }, [user])

    const navigate = useNavigate()

    const editPost = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('id', id)
        if(files?.[0]) {
            data.set('file', files?.[0])
        }
        const response = await fetch('http://localhost:4000/post/'+id, {
            method: 'PUT',
            body: data,
            credentials: 'include'
        })
        if(response.ok) {
            navigate('/post/'+id)
        }
    }
    
    return (
        <form onSubmit={editPost}>
            <input type="title" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="summary" placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)} />
            <input type="file" onChange={e => setFiles(e.target.files)}/>
            <Editor value={content} onChange={setContent} />
            <button style={{marginTop: "5px"}}>Update post</button>
        </form>
    )
}

export default connect(
    state => ({
        user: state.userReducer.userInfo
    })
)(EditPost)