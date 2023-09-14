import { useAppSelector } from "../../Store/store"
import { RenderPost } from "../Post/RenderPost"

export const FavoritePosts = () => {
    const posts = useAppSelector(state => state.posts.posts.filter(post => post.favorite))

    return <div>
        {posts.map(post => <RenderPost post={post} key={post.id} />)}
    </div>
}