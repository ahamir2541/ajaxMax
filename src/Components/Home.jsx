import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from './Post'
import SelectedPost from './SelectedPost'

const Home = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [posts, setPosts] = useState([])
    const [selectedPostId, setSelectedPostId] = useState(null)
    const [errorMsg, setErrorMsg] = useState(true)

    useEffect(() => {
        Axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 5)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'max',
                    }
                })
                setPosts(updatedPosts)
            })
            .catch(err => {
                setErrorMsg(false)
            })
    }, [])

    const addedHandler = e => {
        e.preventDefault()

        const data = {
            title,
            body,
            author,
        }

        Axios.post('/posts', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const selectedPostIdHandler = (id) => {
        setSelectedPostId(id)
    }

    return (
        <div className="container">
            <form onSubmit={addedHandler} >
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control mt-3 "
                    placeholder="title"
                    type="text" />

                <input
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    className="form-control mt-3 "
                    placeholder="body"
                    type="text" />

                <input
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className="form-control mt-3 "
                    placeholder="author"
                    type="text" />

                <button className="btn btn-info mt-2" >Add</button>
                {errorMsg ?
                    <div>
                        <div className="mt-4">
                            {posts.map(post => (
                                <Post
                                    clicked={selectedPostIdHandler}
                                    key={post.id}
                                    post={post} />
                            ))}
                        </div>
                        <div className="selectPost mt-4">
                            <SelectedPost id={selectedPostId} />
                        </div>
                    </div>
                    :
                    <h4>something went wrong</h4>}
            </form>
        </div>
    );
};

export default Home;