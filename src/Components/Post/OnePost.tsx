import { useParams } from "react-router-dom"
import { useAppSelector } from "../../Store/store"
import { OnePost } from "./getPosts"
import './OnePost.css'
import { useContext } from "react"
import { ThemeContext } from "../Context/themeContext"
import { Likes } from "../Likes/Likes"

export const RenderOnePost = (props: { post?: OnePost }) => {
    const { postId } = useParams()
    const onePost = useAppSelector(state => state.posts.posts.find(post => String(post.id)=== postId))
const theme = useContext(ThemeContext)

    if (!onePost) return null

    return <div className="onePostMainDiv">
        <div className="onePostImgDiv ">
            <img src={onePost.image} alt={onePost.text}></img>
        </div>
        <div className={theme === 'light' ? '' : 'lightText'}>
            <time>{onePost.date}</time>
            <h3>{onePost.title}</h3>
            <p>{onePost.description}</p>
        </div>
        {onePost.id && <Likes postId={onePost.id} />}
    </div>
}