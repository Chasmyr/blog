import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { connect } from "react-redux"
import Editor from "../../components/editor"

const CreatePost = ({user = null}) => {

    useEffect(() => {
        if(user === null) {
            navigate('/')
        }
    }, [user])

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')

    const navigate = useNavigate()

    const createNewPost = async (e) => {
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])
        e.preventDefault()
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include'
        })
        
        if(response.ok) {
            navigate('/')
        }
    }

    return (
        <form onSubmit={createNewPost}>
            <input type="title" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="summary" placeholder="Summary" value={summary} onChange={e => setSummary(e.target.value)} />
            <input type="file" onChange={e => setFiles(e.target.files)}/>
            <Editor value={content} onChange={setContent} />
            <button style={{marginTop: "5px"}}>Create post</button>
        </form>
    )
}

export default connect(
    state => ({
        user: state.userReducer.userInfo
    })
)(CreatePost)