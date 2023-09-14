import { getPostsThunk, setLimit } from "../Store/post"
import { useAppDispatch } from "../Store/store"

export const Select = () => {
    const dispatch = useAppDispatch()

    return (
        <select onChange={(e) => {
            dispatch(setLimit(Number(e.target.value)))
            dispatch(getPostsThunk({limit: Number(e.target.value)}))
        }
        }>
            <option value={1}>1</option>
            <option value={4}>4</option>
            <option value={8}>8</option>
        </select>
    )
}