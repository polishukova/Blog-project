import { increaseDislike, increaseLike } from "../../Store/post"
import { useAppDispatch, useAppSelector } from "../../Store/store"
import './Likes.css'
import { ReactComponent as LikeSvg } from './like.svg'
import { ReactComponent as DislikeSvg } from './dislike.svg'

type Props = {
    postId: number,
}

export const Likes = ({ postId }: Props) => {

    const dispatch = useAppDispatch()

    const post = useAppSelector(state => state.posts.posts.find(post => post.id === postId))

    return <div className='divLikes'>
        <div>
            <button className='buttonLikes' onClick={() => {
                const action = increaseLike(postId)
                return dispatch(action)
            }}><LikeSvg className='svg' /></button>
            <span>{post?.likes || '0'}</span>
        </div>
        <div>
            <button className='buttonLikes' onClick={() => {
                const action = increaseDislike(postId)
                return dispatch(action)
            }}><DislikeSvg className='svg' /></button>
            <span>{post?.dislikes || '0'}</span>
        </div>
    </div>
}