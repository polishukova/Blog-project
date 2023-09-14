
import { Link, useParams } from 'react-router-dom'
import { OnePost } from './getPosts'
import './RenderPost.css'
import { useContext, useEffect, useState } from 'react'
import { getPost } from './getPosts'
import { ThemeContext } from '../Context/themeContext'
import { Likes } from '../Likes/Likes'
import { AddToFavorites } from '../AddToFavorites/AddToFavorites'

export const RenderPost = (props: { post?: OnePost }) => {
    const { postId } = useParams()
    const [onePost, setOnePost] = useState(props.post)
    const theme = useContext(ThemeContext)

    useEffect(() => {
        postId && getPost(postId).then(resp => setOnePost(resp))
    }, [postId])

    if (!onePost) return null

    return <div className="mainDiv">
        <div className='textDiv'>
            <Link className={theme === 'light' ? 'textDiv' : 'textDivLight'} to={'/Posts/' + onePost.id}>
                <div >
                    <time>{onePost.date}</time>
                    <h3>{onePost.title}</h3>
                    <p>{onePost.description}</p>
                </div>
            </Link>
            <div className='likesDiv'>
                {onePost.id && <Likes postId={onePost.id} />}
                {onePost.id && <AddToFavorites postId={onePost.id}/>}
            </div>
        </div>
        <div className="imgDiv">
            <img src={onePost.image} alt={onePost.text}></img>
        </div>
    </div>
}
