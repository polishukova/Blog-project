import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { OnePost, getPosts } from '../Components/Post/getPosts'
import { RootState } from './store'

const initialState: { posts: OnePost[], limit: number, offset: number } = { posts: [], limit: 10, offset: 0 }

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<OnePost[]>) => {
            state.posts = action.payload
        },
        increaseLike: (state, action: PayloadAction<number>) => {
            const post = state.posts.find(post => post.id === action.payload)
            if (!post) return
            post.likes = post.likes ? post.likes + 1 : 1
        },
        increaseDislike: (state, action: PayloadAction<number>) => {
            const post = state.posts.find(post => post.id === action.payload)
            if (!post) return
            post.dislikes = post.dislikes ? post.dislikes + 1 : 1
        },
        toggleFavoritesPosts: (state, action: PayloadAction<number>) => {
            const post = state.posts.find(post => post.id === action.payload)
            if (!post) return
            post.favorite = !post.favorite
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(getPostsThunk.fulfilled, (state, action: PayloadAction<OnePost[]>) => {
            state.posts = action.payload
        })
        .addCase(getNextPageThunk.fulfilled, (state, action: PayloadAction<OnePost[]>) => {
            state.posts = action.payload
            state.offset = state.offset+state.limit
        })
    },
})

export const { setPosts, increaseLike, increaseDislike, toggleFavoritesPosts, setLimit } = postsSlice.actions

export const postsReducer = postsSlice.reducer

export const getPostsThunk = createAsyncThunk<OnePost[], {search?:string, limit?: number }, {state : RootState} >('post/getPost', async ({search = '', limit}, store) => {
    const state = store.getState()
    const posts = await getPosts({ 'limit': limit? limit : state.posts.limit, 'search': search })
    return posts
})

export const getNextPageThunk = createAsyncThunk<OnePost[], void, {state : RootState} >('post/getNextPost', async (_, store) => {
    const state = store.getState()
    const posts = await getPosts({ 'limit': state.posts.limit, 'search': '', offset: state.posts.offset+state.posts.limit })
    return posts
})
