import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom' // RRD is a package

// get specific information for each bookmark

const Show = () => {
    // const params = useParams() // initialize useParams
    // Params is an obj with all the parameters. it's called index bc that is what we named it in the Route in App.jsx
    // console.log(params.index) - // instead of pulling out the entire obj, we destructure
    const [bookmark, setBookmark] = useState(null)
    const { index } = useParams() // look at url, and pull out url
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch(`${API}/${index}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                navigate('/bookmarks')
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setBookmark(res)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            { bookmark &&
                <div className='bookmark'>
                    <h2>{bookmark.name}</h2>
                    <a href={bookmark.url} target='_blank'>Take me there</a>
                    <br/>
                    <Link to={`/bookmarks/${index}/edit`}>
                        <button>Edit</button>
                    </Link>
                    <br/>
                    <button onClick={handleDelete}>Delete</button> 
                </div> 
            }
        </div>
    );
};

export default Show;