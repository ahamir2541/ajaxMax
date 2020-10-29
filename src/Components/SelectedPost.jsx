import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SelectedPost = ({id}) => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        Axios.get(`/posts/${id}`)
            .then(res => {
                setTitle(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const deleteHanlder = (id) => {
        Axios.delete(`/posts/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="my-5">
            { id ? 
            <div className="p-1 bg-warning text-center">
                <h4> {title.title} </h4>
                <p> {title.body} </p>
                <h4 onClick={() => deleteHanlder(id) } style={{
                    cursor : 'pointer'
                }} className="text-danger" >delete</h4>
            </div>
            : 
            'no selected' }
        </div>
    );
};

export default SelectedPost;