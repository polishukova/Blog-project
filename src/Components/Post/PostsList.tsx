import { useEffect } from "react"
import { RenderPost } from "./RenderPost";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import { getNextPageThunk, getPostsThunk } from "../../Store/post";
import './PostsList.css'
import { Select } from "../Select";

export const PostsList = () => {
    const postsList = useAppSelector(state => state.posts.posts)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     getPosts({ 'limit': 4, 'search': searchResult }).then((resp) => dispatch(setPosts(resp)))
    // }, [searchResult])

    useEffect(() => { dispatch(getPostsThunk({})) }, [])

    return <>
        <div className="postsListDiv">
            <Select />
            {!postsList.length && 'Not found'}
            {postsList.map(post => <RenderPost post={post} key={post.id} />)}
            <button>Previous</button>
            <button onClick={() => {
                dispatch(getNextPageThunk())
            }}>Next</button>
        </div>
    </>
}