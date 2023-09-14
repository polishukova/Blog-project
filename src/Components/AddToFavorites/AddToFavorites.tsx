import { toggleFavoritesPosts } from "../../Store/post"
import { useAppDispatch } from "../../Store/store"
import { ReactComponent as BookMark } from "../AddToFavorites/bookmark.svg"
import './AddToFavorites.css'


type Props = {
    postId: number,
}

export const AddToFavorites = ({ postId }: Props) => {
    const dispatch = useAppDispatch()

    return <div>
        <button className='bookmark' onClick={() => {
            return dispatch(toggleFavoritesPosts(postId))
        }}><BookMark/></button>
    </div>
}