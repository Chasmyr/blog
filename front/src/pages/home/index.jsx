import { useEffect, useState } from "react"
import Post from "../../components/post"

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(data => {
                setPosts(data)
            })
        })
    }, [])

    return (
        <>
            {posts.length > 0 && posts.map((post, index) => {
                return (
                    <Post key={index} post={post}/>
                )
            })}
        </>
    )
}

export default Home