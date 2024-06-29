import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const API = import.meta.env.VITE_BASE_URL
    const [bookmark, setBookmark] = useState({
        name: "",
        url: "",
        category: "",
        is_favorite: false
    })
    const navigate = useNavigate()
    const { index } = useParams()

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => res.json())
            .then(res => {
                // console.log("Edit page: ", res)
                setBookmark((prevState) => res)
            })
            .catch(err => console.log(err))
    }, [index])

    const handleChange = (e) => {
        // console.log(e)
        setBookmark((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleCheckBox = (e) => {
        setBookmark((prevState) => {
            const favorited = !bookmark.is_favorite
            return { ...prevState, is_favorite: favorited }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${API}/${index}`, {
            method: 'PUT',
            body: JSON.stringify(bookmark),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                navigate(`/bookmarks/${index}`)
             })
            .catch(err => console.error(err))
    }

    if(!bookmark) return <div>Loading...</div>
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Edit this Bookmark</legend>
                    <input 
                        type="text"
                        placeholder="Bookmark Name"
                        name="name"
                        value={bookmark.name}
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        type="text" 
                        placeholder='URL'
                        name="url"
                        value={bookmark.url}
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        type="text" 
                        placeholder='Category'
                        name="category"
                        value={bookmark.category}
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        type="checkbox"
                        id="fav"
                        checked={bookmark.is_favorite}
                        onChange={handleCheckBox}
                    />
                    <label htmlFor="fav">Favorite</label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </fieldset>
            </form>
            <Link to={`/bookmarks/${index}/edit`}>
                <button>Edit</button>
            </Link>
        </div>
    );
};

export default Edit;
