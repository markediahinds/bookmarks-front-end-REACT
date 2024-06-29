// import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [bookmarks, setBookmarks] = useState([])
    const API = import.meta.env.VITE_BASE_URL

    useEffect(() => {
        fetch(API) // fetch/call/request for the data
        .then(res => res.json())
        .then(res => { 
            setBookmarks(res) //reassign bookmarks so that it equals that array | res is the data that is at the fetched api url link 
            // console.log(res)
        })
        .catch(err => console.error(err)) // console.error ! will show up red!
    }, [])

    return (
        <div className='bookmark-container'>
            { bookmarks.map((bookmark, i) => { // iterate over our array which is our state
                return (
                    <div className='bookmark-link' key={i}> 
                        <Link to={`/bookmarks/${i}`}>
                        {bookmark.name}
                        </Link> 
                    </div> // we have to use {} when incorporating JS because it is reading it as a string instead of a JS variable
                )
            })
        } 
        </div>
    );  
};

export default Home;